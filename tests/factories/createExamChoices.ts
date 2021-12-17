import { getRepository } from 'typeorm';
import Category from '../../src/entities/CategoryEntity';
import Subject from '../../src/entities/SubjectEntity';
import Profesor from '../../src/entities/ProfesorEntity';
import Period from '../../src/entities/PeriodEntity';

const createExamChoices = async () => {
    await getRepository(Period).insert({ name: 'wow' });
    const period = await getRepository(Period).findOne({ name: 'wow' });
    await getRepository(Category).insert({ name: 'little ball' });
    await getRepository(Subject).insert({ name: 'math', periodId: period.id });
    const subject = await getRepository(Subject).findOne({ name: 'math' });
    await getRepository(Profesor).insert({ name: 'Jair', subjectId: subject.id });
};

export default createExamChoices;
