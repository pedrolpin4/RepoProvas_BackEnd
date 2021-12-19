import { DBProfesor } from './Profesor';
import { DBSubject } from './Subject';

export interface DBProfesorSubject {
    id: number;
    name: string;
    subject?: DBSubject;
    subjectId?: number;
    profesor?: DBProfesor,
    profesorId?: number,
}
