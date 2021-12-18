import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import serverErrorMiddleware from './middlewares/serverErrorMiddleware';
import examsRouter from './routes/examsRouter';
import profesorsRouter from './routes/profesorsRouter';
import subjectsRouter from './routes/subjectsRouter';

const app = express();
app.use(cors());
app.use(express.json());
app.use(serverErrorMiddleware);

app.use('/exams', examsRouter);
app.use('/profesors', profesorsRouter);
app.use('/subjects', subjectsRouter);

export async function init() {
    await connectDatabase();
}

export default app;
