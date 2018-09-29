import { IsString, IsInt, MinLength, IsBoolean } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @MinLength(2)
  user: string;

  @IsString()
  barcode: string;

  @IsString()
  phone: string;

  @IsInt()
  cost: number;

  @IsBoolean()
  isFinished: boolean;
}
