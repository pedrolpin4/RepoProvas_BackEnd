import { NextFunction, Request, Response } from 'express';
import ValidationError from '../errors/ValidationError';

const getExamsInfo = (req: Request, res: Response, next: NextFunction) => {
    const { forms } = req.body;

    try {
        if (forms) throw new ValidationError('You need to send a body with the following pattern: {name, link, category: {}, profesor: {}}');

        return res.send(forms);
    } catch (error) {
        return next(error);
    }
};

const postExam = (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.sendStatus(201);
    } catch (error) {
        return next(error);
    }
};

export {
    getExamsInfo,
    postExam,
};
