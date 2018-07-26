import { IsString, IsInt, MinLength, IsEnum } from 'class-validator';

export class CreateUser {
  @IsString()
  @MinLength(2)
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @IsEnum(['boy', 'girl'])
  sex: string;
}
