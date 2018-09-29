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

@Controller('users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  root(@Req() request): string {
    const query = request.query;
    return this.appService.root();
  }

  @Get('/:id')
  userDetail(@Req() request): Array<string> {
    const params = request.params;
    return ['jack', 'rose', params];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Res() res, @Body() body: CreateUser) {
    res.status(HttpStatus.CREATED).send();
  }
}
