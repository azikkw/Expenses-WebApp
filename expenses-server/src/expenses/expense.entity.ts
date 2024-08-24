import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;
    dateTime: string;
    author: string;
    sum: number;
    category: string;
    comment: string;
}