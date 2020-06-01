import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import { RegisterRoutes } from './api/routes';

export const app = express();

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.log(err);
//   next();
// });

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json())
app.use('/docs',
  swaggerUi.serve,
  swaggerUi.setup(require('../spec/swagger.json')),
);

RegisterRoutes(app);
