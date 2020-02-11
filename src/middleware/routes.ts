import Express from 'express';
import { ClientRequest, IncomingMessage, ServerResponse } from 'http';
import Proxy, { ServerOptions } from 'http-proxy';

import indexService from '../service/index.service';

export default (app: Express.Application) => {
  app.get('/', (req: Express.Request, res: Express.Response) => {
    const responseData = indexService.getData();
    res.json(responseData);
  });

  app.post('/post', (req: Express.Request, res: Express.Response) => {
    console.log(req.body);
    res.status(201).json({});
  });

  app.post('/proxy/*', (req: Express.Request, res: Express.Response) => {
    const proxy = Proxy.createProxyServer({});
    proxy.on(
      'proxyReq',
      (proxyReq: ClientRequest, req: IncomingMessage, res: ServerResponse, options: ServerOptions) => {
        if (req.url) {
          proxyReq.path = req.url.replace('/proxy', '');
        }
        // https://github.com/http-party/node-http-proxy/issues/1142
        if ((req as Express.Request).body) {
          const bodyData = JSON.stringify((req as Express.Request).body);
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
          proxyReq.write(bodyData);
        }
      },
    );

    proxy.web(req, res, {
      target: 'http://localhost:4000',
    });
  });
};
