import { getRepository } from 'typeorm';
import Category from '../entities/CategoryEntity';
import Profesor from '../entities/ProfesorEntity';

const handleProfesorsObject = async () => {
    const categories = await getRepository(Category).find();
    const teachers = await getRepository(Profesor).find();
    const profesors = teachers.map((teacher) => teacher.profesorsPage());

    return { categories, profesors };
};

const filler = () => {};

export {
    handleProfesorsObject,
    filler,
};
