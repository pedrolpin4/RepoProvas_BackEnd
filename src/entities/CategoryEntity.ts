import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { DBExam } from '../interfaces/Exam';
import Exam from './ExamEntity';

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => Exam, (exams: Exam) => exams.category)
        exams: DBExam[];
}
