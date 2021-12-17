import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { DBSubject } from '../interfaces/Subject';
import Subject from './SubjectEntity';

@Entity('periods')
export default class Period {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => Subject, (subjects: Subject) => subjects.period)
        subjects: DBSubject[];
}
