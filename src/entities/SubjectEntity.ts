import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import Period from './PeriodEntity';

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column({ name: 'period_id' })
        periodId: number;

    @OneToOne(() => Period, { eager: true })
    @JoinColumn({ name: 'period_id' })
        period: Period;
}
