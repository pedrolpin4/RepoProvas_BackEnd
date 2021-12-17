import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profesors')
export default class Profesor {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column('discipline_id')
        subjectId: string;
}
