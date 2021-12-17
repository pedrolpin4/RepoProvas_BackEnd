import { getRepository } from 'typeorm';
import Subject from '../entities/SubjectEntity';
import Category from '../entities/CategoryEntity';
import Profesor from '../entities/ProfesorEntity';
import ValidationError from '../errors/ValidationError';
import { Exam } from '../interfaces/Exam';
import sendExamValidation from '../validations/joiValidations';

const examsChoices = async () => {
    const categories = await getRepository(Category).find({});
    const subjects = await getRepository(Subject).find({});
    const profesors = await getRepository(Profesor).find({});
    if (!categories.length || !subjects.length || !profesors.length) return null;
    return {
        categories,
        subjects,
        profesors,
    };
};

const sendExam = async (forms: Exam) => {
    if (!forms) throw new ValidationError('You need to send a body with the following pattern: {name, link, category: {}, profesor: {}}');
    const isError = sendExamValidation.validate(forms).error;
    if (isError) {
        throw new ValidationError(
            `You need to send a body with the following pattern: {name, link, category: {}, profesor: {}}, 
        so  ${isError.message}`,
        );
    }
    return isError;
};

export {
    examsChoices,
    sendExam,
};
