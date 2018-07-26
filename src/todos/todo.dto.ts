import { IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly content: string;
}