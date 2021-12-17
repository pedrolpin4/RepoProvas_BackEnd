import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exams')
export default class Exam {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        link: string;

    @Column('profesor_id')
        profesorId: string;

    @Column('category_id')
        categoryId: string;
}
