import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { DBPeriod } from '../interfaces/Period';
import { DBProfesorSubject } from '../interfaces/ProfesorSubject';
import Exam from './ExamEntity';
import Period from './PeriodEntity';
import ProfesorsSubjects from './ProfesorsSubjectsEntity';

@Entity('subjects', {
    orderBy: {
        name: 'ASC',
    },
})
export default class Subject {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column({ name: 'period_id' })
        periodId: number;

    @ManyToOne(() => Period, (period: Period) => period.subjects, { eager: true })
    @JoinColumn({ name: 'period_id' })
        period: DBPeriod;

    @OneToMany(() => Exam, (exam: Exam) => exam.subject)
        exams: Exam[];

    @OneToMany(
        () => ProfesorsSubjects,
        (profesorSubject: ProfesorsSubjects) => profesorSubject.profesor,
    )
        profesorSubject: DBProfesorSubject[];

    subjectsPage() {
        return {
            id: this.id,
            name: this.name,
            periodId: this.periodId,
            quantity: this.exams.length,
            exams: this.exams.map((exam) => (
                {
                    id: exam.id,
                    name: exam.name,
                    link: exam.link,
                    categoryId: exam.categoryId,
                    profesor: exam.profesor.name,
                }
            )),
        };
    }
}
