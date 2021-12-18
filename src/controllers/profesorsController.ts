import { NextFunction, Request, Response } from 'express';
import * as profesorServices from '../services/profesorsService';

const getProfesorsExam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await profesorServices.handleProfesorsObject();

        if (!result.profesors.length) {
            return res.status(204).send('There are no profesors registered on our database');
        }

        return res.status(200).send(result);
    } catch (error) {
        return next(error);
    }
};

const filler = () => {};

export {
    getProfesorsExam,
    filler,
};
