import Express from 'express';

export default (app: Express.Application) => {
  app.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    res.status(404).json({ error: 'Not found' });
  });

  app.use((err: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    console.error(err);
  });
};
