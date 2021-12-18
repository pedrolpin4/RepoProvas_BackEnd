import { getRepository } from 'typeorm';
import faker from 'faker';
import Category from '../../src/entities/CategoryEntity';
import Subject from '../../src/entities/SubjectEntity';
import Profesor from '../../src/entities/ProfesorEntity';
import Period from '../../src/entities/PeriodEntity';
import Exam from '../../src/entities/ExamEntity';

const createExamChoices = async () => {
    const periodName = faker.name.jobType();
    const categoryName = faker.name.firstName();
    const subjectName = faker.name.lastName();
    const profesorName = faker.name.findName();
    const examLink = faker.internet.url();
    const examName = faker.name.firstName();

    await getRepository(Period).insert({ name: periodName });
    const period = await getRepository(Period).findOne({ name: periodName });
    await getRepository(Category).insert({ name: categoryName });
    const category = await getRepository(Category).findOne({ name: categoryName });
    await getRepository(Subject).insert({ name: subjectName, periodId: period.id });
    const subject = await getRepository(Subject).findOne({ name: subjectName });
    await getRepository(Profesor).insert({ name: profesorName, subjectId: subject.id });
    const profesor = await getRepository(Profesor).findOne({ name: profesorName });
    await getRepository(Exam).insert({
        name: examName,
        link: examLink,
        subjectId: subject.id,
        categoryId: category.id,
        profesorId: profesor.id,
    });
    const exam = await getRepository(Exam).findOne({ name: examName });

    return {
        period,
        category,
        subject,
        profesor,
        exam,
    };
};

export default createExamChoices;
