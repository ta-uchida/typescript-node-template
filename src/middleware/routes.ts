import Express from 'express';

import indexService from '../service/index.service';

export default (app: Express.Application) => {
  app.get('/', (req: Express.Request, res: Express.Response) => {
    const responseData = indexService.getData();
    res.json(responseData);
    return;
  });
};
