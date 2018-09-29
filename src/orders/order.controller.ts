import {
  Req,
  Body,
  Post,
  Get,
  UsePipes,
  Controller,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './order.dto';
import { ValidationPipe } from 'helper/validation.pipe';
import { Order } from './order.interface';

@Controller('orders')
export class OrderController {
  constructor(private readonly OrderService: OrderService) {}

  @Get()
  async root(@Req() request): Promise<Order[]> {
    return await this.OrderService.findAll();
  }

  @Get('/:id')
  async detail(@Req() request): Promise<Order> {
    const id = request.params.id;
    return await this.OrderService.detail(parseInt('10', id));
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateOrderDto): Promise<Order> {
    return await this.OrderService.create(body);
  }

}
