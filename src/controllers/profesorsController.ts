import { NextFunction, Request, Response } from 'express';
import handleProfesorsObject from '../services/profesorsService';

const getProfesorsExams = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await handleProfesorsObject();

        if (!result.profesors.length) {
            return res.status(204).send('There are no profesors registered on our database');
        }

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};

export default getProfesorsExams;
