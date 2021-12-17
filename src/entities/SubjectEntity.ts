import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { DBPeriod } from '../interfaces/Period';
import Period from './PeriodEntity';
import Profesor from './ProfesorEntity';

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column({ name: 'period_id' })
        periodId: number;

    @OneToMany(() => Profesor, (profesor: Profesor) => profesor.subject)
        profesors: Profesor[];

    @ManyToOne(() => Period, (period: Period) => period.subjects, { eager: true })
    @JoinColumn({ name: 'period_id' })
        period: DBPeriod;
}
