import {
  Delete,
  Get,
  Post,
  Controller,
  Body,
  Res,
  HttpStatus,
  Req,
  Param,
  UsePipes,
  HttpCode,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './todo.dto';
import { ValidationPipe } from 'helper/validation.pipe';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async list(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Get('/:id')
  async detail(@Param('id') id: string): Promise<Todo> {
    console.log('id', id);
    return await this.todoService.todoDetail(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateTodoDto): Promise<Todo>{
    return await this.todoService.create(body);
  }

  @Delete('/:id')
  delete(@Req() req, @Res() res): void {
    const id = req.params.id;
    console.log('id', id);
    res.status(HttpStatus.OK).json([]);
  }
}
