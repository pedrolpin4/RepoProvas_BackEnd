import { DBProfesor } from './Profesor';
import { DBCategory } from './Category';

export interface DBExam {
    id?: number;
    name: string;
    link: string;
    profesor?: DBProfesor,
    category?: DBCategory,
    profesorId?: number,
    categoryId?: number,
}
