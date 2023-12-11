/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// api/v1/students

// application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  const a = 'PH University Server is running';
  res.send(a);
};

app.get('/', test);

app.use(globalErrorHandler);
// Not Found
app.use(notFound);

export default app;
