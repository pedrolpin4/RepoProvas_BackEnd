import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Exam from "./src/entities/ExamEntity";
import Profesor from './src/entities/ProfesorEntity'

const tryRascunho = async (req: Request, res: Response) => {
    const profesors = [{
        id: 0,
        name: '',
        quantity: 1,
        categories: [
            {
                id: 0,
                name: '',
                exams: [
                    {
                        id: 0,
                        name: '',
                        subject: '',
                    },
                ],
            },
        ],
    }];
    
    const teachers = await getRepository(Exam).find();

    res.status(200).send(teachers)
    
    console.log(teachers, profesors);    
}

export default tryRascunho;
