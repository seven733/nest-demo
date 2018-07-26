import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import * as R from 'ramda';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      if (R.contains(req.method, ['POST', 'PUT'])) {
        console.log('body data: ', req.body);
      }
      next();
    };
  }
}
