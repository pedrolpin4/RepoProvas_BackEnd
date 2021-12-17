import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import Category from './CategoryEntity';
import Profesor from './ProfesorEntity';

@Entity('exams')
export default class Exam {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        link: string;

    @OneToOne(() => Category, { eager: true })
    @JoinColumn({ name: 'category_id' })
        category: Category;

    @OneToOne(() => Profesor, { eager: true })
    @JoinColumn({ name: 'professor_id' })
        profesor: Profesor;
}
