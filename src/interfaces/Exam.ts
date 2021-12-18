import { DBProfesor } from './Profesor';
import { DBCategory } from './Category';
import { DBSubject } from './Subject';

export interface DBExam {
    id?: number;
    name: string;
    link: string;
    profesor?: DBProfesor,
    category?: DBCategory,
    subject?: DBSubject
    profesorId?: number,
    categoryId?: number,
    subjectId?: number,
}
