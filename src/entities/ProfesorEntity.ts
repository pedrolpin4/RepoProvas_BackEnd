import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { DBExam } from '../interfaces/Exam';
import { DBSubject } from '../interfaces/Subject';
import Exam from './ExamEntity';
import Subject from './SubjectEntity';

@Entity('professors')
export default class Profesor {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column({ name: 'discipline_id' })
        subjectId: number;

    @ManyToOne(() => Subject, (subject: Subject) => subject.profesors, { eager: true })
    @JoinColumn({ name: 'discipline_id' })
        subject: DBSubject;

    @OneToMany(() => Exam, (exams: Exam) => exams.profesor, { eager: true })
        exams: DBExam[];

    profesorsPage() {
        return {
            id: this.id,
            name: this.name,
            quantity: this.exams.length,
            exams: this.exams.map((exam) => (
                {
                    id: exam.id,
                    name: exam.name,
                    link: exam.link,
                    categoryId: exam.categoryId,
                    subject: this.subject.name,
                }
            )),
        };
    }
}
