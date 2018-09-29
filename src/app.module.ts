import { Module, NestModule, MiddlewareConsumer, Logger } from '@nestjs/common';
import { LoggerMiddleware } from 'middleware/logger';

import { APP_FILTER } from '@nestjs/core';
import { AnyExceptionFilter } from 'errorHandler/any-exception.filter';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from 'users/user.module';
import { TodosModule } from 'todos/todo.module';
import { OrdersModule } from 'orders/order.module';

import { UserController } from 'users/user.controller';
import { TodoController } from 'todos/todo.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    TodosModule,
    OrdersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/demo-nest'),
    TypeOrmModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AnyExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UserController, TodoController);
  }
}
