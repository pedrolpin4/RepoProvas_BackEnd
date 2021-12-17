import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import Subject from './SubjectEntity';

@Entity('profesors')
export default class Profesor {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToOne(() => Subject, { eager: true })
    @JoinColumn({ name: 'discipline_id' })
        subject: Subject;
}
