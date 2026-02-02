import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  text: string;

  @IsString()
  @IsNotEmpty()
  status?: string;

  @IsString()
  @IsNotEmpty()
  gender?: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
