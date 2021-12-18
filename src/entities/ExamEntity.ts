import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { DBCategory } from '../interfaces/Category';
import { DBProfesor } from '../interfaces/Profesor';
import { DBSubject } from '../interfaces/Subject';
import Category from './CategoryEntity';
import Profesor from './ProfesorEntity';
import Subject from './SubjectEntity';

@Entity('exams')
export default class Exam {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        link: string;

    @Column({ name: 'professor_id' })
        profesorId: number;

    @Column({ name: 'subject_id' })
        subjectId: number;

    @Column({ name: 'category_id' })
        categoryId: number;

    @ManyToOne(() => Category, (category: Category) => category.exams, { eager: true })
    @JoinColumn(({ name: 'category_id' }))
        category: DBCategory;

    @ManyToOne(() => Profesor, (profesor: Profesor) => profesor.exams, { eager: true })
    @JoinColumn(({ name: 'professor_id' }))
        profesor: DBProfesor;

    @ManyToOne(() => Subject, (subject: Subject) => subject.exams, { eager: true })
    @JoinColumn(({ name: 'subject_id' }))
        subject: DBSubject;
}
