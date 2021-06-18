import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import orderController from '../controllers/orders.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/v1/orders', orderController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
