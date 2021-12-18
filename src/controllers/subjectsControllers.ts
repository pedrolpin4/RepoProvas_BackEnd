import { NextFunction, Request, Response } from 'express';
import handleSubjectsObject from '../services/subjectsService';

const getSubjectsExams = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await handleSubjectsObject();

        if (!result.subjects.length) {
            return res.status(204).send('There are no Subjects registered on our database');
        }

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};

export default getSubjectsExams;
