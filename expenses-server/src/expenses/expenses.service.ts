import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from "./expense.entity";
import { CreateExpenseDto } from "./dto/create-expense.dto";

@Injectable()
export class ExpensesService {
    
    constructor(
        @InjectRepository(Expense)
        private expensesRepository: Repository<Expense>,
    ) {}
    
    findAll(): Promise<Expense[]> {
      return this.expensesRepository.find({order: {dateTime: 'DESC'}});
    }

    create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
      const expense = this.expensesRepository.create(createExpenseDto);
      return this.expensesRepository.save(expense);
    }

}