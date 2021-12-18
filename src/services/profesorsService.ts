import { getRepository } from 'typeorm';
import Category from '../entities/CategoryEntity';
import Profesor from '../entities/ProfesorEntity';

const handleProfesorsObject = async () => {
    const categories = await getRepository(Category).find();
    const teachers = await getRepository(Profesor).find({
        relations: ['exams'],
    });
    const profesors = teachers.map((teacher) => teacher.profesorsPage());

    return { categories, profesors };
};

export default handleProfesorsObject;
