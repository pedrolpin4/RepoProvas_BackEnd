import { NextFunction, Request, Response } from 'express';

const getExamsInfo = (req: Request, res: Response, next: NextFunction) => {
    const { forms } = req.body;

    try {
        if (forms) return res.sendStatus(201);

        return res.sendStatus(200);
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
