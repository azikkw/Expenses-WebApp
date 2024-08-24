import { Body, Controller, Get, Post } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { CreateExpenseDto } from "./dto/create-expense.dto";

@Controller('expenses')
export class ExpensesController {

    constructor(private readonly expensesService: ExpensesService) {}

    @Get()
    getAllExpenses() {
        return this.expensesService.findAll();
    }

    @Post()
    create(@Body() createExpenseDto: CreateExpenseDto) {
      return this.expensesService.create(createExpenseDto);
    }

}