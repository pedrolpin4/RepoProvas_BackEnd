import { getRepository } from 'typeorm';
import Subject from '../entities/SubjectEntity';
import Category from '../entities/CategoryEntity';
import Profesor from '../entities/ProfesorEntity';
import ValidationError from '../errors/ValidationError';
import Exam from '../entities/ExamEntity';
import { DBExam } from '../interfaces/Exam';
import sendExamValidation from '../validations/joiValidations';
import ConflictError from '../errors/ConflictError';
import NotFound from '../errors/NotFound';

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

const verifyAssetsExistence = async (catId: number, profId: number) => {
    const hasProfesor = await getRepository(Profesor).findOne({ id: profId });
    if (!hasProfesor) throw new NotFound('Looks like there is no profesor registered with this id');

    const hasCategory = await getRepository(Category).findOne({ id: catId });
    if (!hasCategory) throw new NotFound('Looks like there is no category registered ith this id');
};

const validateBody = async (forms: DBExam) => {
    if (!forms) throw new ValidationError('You need to send a body with the following pattern: {name, link, categoryId, profesorId}');
    const isError = sendExamValidation.validate(forms).error;
    if (isError) {
        throw new ValidationError(
            `You need to send a body with the following pattern: {name, link, categoryId, profesorId}, 
            so  ${isError.message}`,
        );
    }
};

const verifyLinkUniquiness = async (forms: DBExam) => {
    const validLink = await getRepository(Exam).findOne({ link: forms.link });
    if (validLink) throw new ConflictError('This link has already been registered');
};

const sendExam = async (forms: DBExam) => {
    await validateBody(forms);
    await verifyAssetsExistence(forms.categoryId, forms.profesorId);
    await verifyLinkUniquiness(forms);

    await getRepository(Exam).insert(forms);
};

export {
    examsChoices,
    sendExam,
};
