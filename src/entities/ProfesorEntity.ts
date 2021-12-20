import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { DBExam } from '../interfaces/Exam';
import { DBProfesorSubject } from '../interfaces/ProfesorSubject';
import Exam from './ExamEntity';
import ProfesorsSubjects from './ProfesorsSubjectsEntity';

@Entity('professors', {
    orderBy: {
        name: 'ASC',
    },
})
export default class Profesor {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => Exam, (exams: Exam) => exams.profesor)
        exams: DBExam[];

    @OneToMany(
        () => ProfesorsSubjects,
        (profesorSubject: ProfesorsSubjects) => profesorSubject.profesor,
        { eager: true },
    )
        profesorSubject: DBProfesorSubject[];

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
                    subject: exam.subject.name,
                }
            )),
        };
    }
}
