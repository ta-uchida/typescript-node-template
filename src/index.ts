import Express from 'express';

import config from './middleware/config';
import errorHandler from './middleware/errorHandler';
import listen from './middleware/listen';
import routes from './middleware/routes';

const app = Express();

config(app);
routes(app);
errorHandler(app);
listen(app);
