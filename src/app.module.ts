import { Module, NestModule, MiddlewareConsumer, Logger } from '@nestjs/common';
import { LoggerMiddleware } from 'middleware/logger';

import { APP_FILTER } from '@nestjs/core';
import { AnyExceptionFilter } from 'errorHandler/any-exception.filter';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from 'users/user.module';
import { TodosModule } from 'todos/todo.module';

import { UserController } from 'users/user.controller';
import { TodoController } from 'todos/todo.controller';

@Module({
  imports: [
    UsersModule,
    TodosModule,
    MongooseModule.forRoot('mongodb://localhost:27017/demo-nest'),
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
