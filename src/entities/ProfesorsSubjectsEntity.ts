import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { DBProfesor } from '../interfaces/Profesor';
import { DBSubject } from '../interfaces/Subject';
import Profesor from './ProfesorEntity';
import Subject from './SubjectEntity';

@Entity('profesors_subjects')
export default class ProfesorsSubjects {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({ name: 'profesor_id' })
        profesorId: number;

    @Column({ name: 'subject_id' })
        subjectId: number;

    @ManyToOne(() => Profesor, (profesor: Profesor) => profesor.profesorSubject)
    @JoinColumn(({ name: 'profesor_id' }))
        profesor: DBProfesor;

    @ManyToOne(() => Subject, (subject: Subject) => subject.profesorSubject, { eager: true })
    @JoinColumn(({ name: 'subject_id' }))
        subject: DBSubject;
}
