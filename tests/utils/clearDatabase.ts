import { getRepository } from 'typeorm';
import Category from '../../src/entities/CategoryEntity';
import Subject from '../../src/entities/SubjectEntity';
import Profesor from '../../src/entities/ProfesorEntity';
import Period from '../../src/entities/PeriodEntity';
import Exam from '../../src/entities/ExamEntity';

const clearDatabase = async () => {
    await getRepository(Exam).delete({});
    await getRepository(Profesor).delete({});
    await getRepository(Subject).delete({});
    await getRepository(Category).delete({});
    await getRepository(Period).delete({});
};

export default clearDatabase;
