import { getRepository } from 'typeorm';
import Category from '../../src/entities/CategoryEntity';
import Subject from '../../src/entities/SubjectEntity';
import Profesor from '../../src/entities/ProfesorEntity';
import Period from '../../src/entities/PeriodEntity';
import Exam from '../../src/entities/ExamEntity';
import { Created } from './Created';

const clearDatabase = async (created: Created, examUrl: string) => {
    if (examUrl) await getRepository(Exam).delete({ link: examUrl });
    await getRepository(Exam).delete({ id: created.exam.id });
    await getRepository(Profesor).delete({ id: created.profesor.id });
    await getRepository(Subject).delete({ id: created.subject.id });
    await getRepository(Category).delete({ id: created.category.id });
    await getRepository(Period).delete({ id: created.period.id });
};

export default clearDatabase;
