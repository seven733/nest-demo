import { HttpException } from '@nestjs/common';

export class TodoException extends HttpException {
  constructor(msg: string = 'todo excption') {
    super(msg, 603);
  }
}
