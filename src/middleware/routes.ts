import Express from 'express';

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
};
