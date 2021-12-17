import { DBCategory } from '../../src/interfaces/Category';
import { DBExam } from '../../src/interfaces/Exam';
import { DBProfesor } from '../../src/interfaces/Profesor';
import { DBPeriod } from '../../src/interfaces/Period';
import { DBSubject } from '../../src/interfaces/Subject';

export interface Created {
    profesor: DBProfesor;
    category: DBCategory;
    period: DBPeriod;
    subject: DBSubject;
    exam: DBExam;
}
