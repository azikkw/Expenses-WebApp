import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Expense } from './expenses/expense.entity';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'expensesdb',
      entities: [Expense],
      synchronize: true
    }),
    ExpensesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
