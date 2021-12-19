import { getRepository } from 'typeorm';
import Category from '../entities/CategoryEntity';
import Period from '../entities/PeriodEntity';
import Subject from '../entities/SubjectEntity';

const handleSubjectsObject = async () => {
    const categories = await getRepository(Category).find();
    const periods = await getRepository(Period).find();
    const disciplines = await getRepository(Subject).find({
        relations: ['exams'],
    });
    const subjects = disciplines.map((subject) => subject.subjectsPage());
    return { periods, categories, subjects };
};

export default handleSubjectsObject;
