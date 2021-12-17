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

    @OneToOne(() => Period, { eager: true })
    @JoinColumn({ name: 'period_id' })
        period: Period;
}
