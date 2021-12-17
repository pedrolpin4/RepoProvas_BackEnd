import { NextFunction, Request, Response } from 'express';
import * as examsService from '../services/examsService';

const getExamsInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const choices = await examsService.examsChoices();
        if (!choices) return res.sendStatus(204);

        return res.send(choices);
    } catch (error) {
        return next(error);
    }
};

const postExam = async (req: Request, res: Response, next: NextFunction) => {
    const { forms } = req.body;

    try {
        const choices = await examsService.sendExam(forms);
        return res.status(201).send(choices);
    } catch (error) {
        return next(error);
    }
};

export {
    getExamsInfo,
    postExam,
};
