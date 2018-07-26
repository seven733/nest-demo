import {
  Req,
  Body,
  Get,
  Controller,
  Post,
  Res,
  HttpStatus,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ValidationPipe } from 'helper/validation.pipe';
import { CreateUser } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  root(@Req() request): string {
    const query = request.query;
    console.log('query', query);
    return this.appService.root();
  }

  @Get('/:id')
  userDetail(@Req() request): Array<string> {
    const params = request.params;
    console.log('params', params);
    return ['jack', 'rose'];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Res() res, @Body() body: CreateUser) {
    console.log('body', body);
    res.status(HttpStatus.CREATED).send();
  }
}
