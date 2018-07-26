import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(todo: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(todo);
    return await createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find({});
  }

  async todoDetail(id: string): Promise<Todo> {
    return await this.todoModel.findOne({_id: id});
  }
}
