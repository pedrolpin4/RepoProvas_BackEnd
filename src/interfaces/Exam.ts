import DBProfesor from '../entities/ProfesorEntity';
import { DBCategory } from './Category';

export interface Exam {
    name: string;
    link: string;
    profesor: DBProfesor,
    category: DBCategory,
}
