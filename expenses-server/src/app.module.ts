import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expenses/expense.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      port: 1433,
      username: 'yourusername',
      password: 'yourpassword',
      database: 'expensesdb',
      entities: [Expense],
      synchronize: true,
      options: {
        enableArithAbort: true,
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
