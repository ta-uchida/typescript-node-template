import Express from 'express';

export default (app: Express.Application) => {
  app.use(Express.json());
};
