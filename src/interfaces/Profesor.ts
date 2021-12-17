import { DBSubject } from './Subject';

export interface DBProfesor {
    id: number;
    name: string;
    subject?: DBSubject;
    subjectId?: number;
}
