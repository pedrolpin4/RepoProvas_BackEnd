import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import Subject from './SubjectEntity';

@Entity('professors')
export default class Profesor {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column({ name: 'discipline_id' })
        subjectId: number;

    @OneToOne(() => Subject, { eager: true })
    @JoinColumn({ name: 'discipline_id' })
        subject: Subject;
}
