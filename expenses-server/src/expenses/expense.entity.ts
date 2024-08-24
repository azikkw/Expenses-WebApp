import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    dateTime: string;
    @Column()
    author: string;
    @Column()
    sum: number;
    @Column()
    category: string;
    @Column()
    comment: string;
}