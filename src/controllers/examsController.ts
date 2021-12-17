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
    const forms = req.body;

    try {
        await examsService.sendExam(forms);
        return res.sendStatus(201);
    } catch (error) {
        if (error.name === 'ValidationError') res.status(400).send(error.message);
        if (error.name === 'NotFound') res.status(404).send(error.message);
        if (error.name === 'ConflictError') res.status(409).send(error.message);

        return next(error);
    }
};

export {
    getExamsInfo,
    postExam,
};
