// ES Module import/export syntax
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import petRouter from '../routes/pet-routes.js';
import userRouter from '../routes/user-routes.js';

const app = express();

// Middleware
app.use(express.json(), cors());
app.use(morgan('dev'));

// Routes
app.use('/api/pets', petRouter);
app.use('/api/auth', userRouter);

export default app;
