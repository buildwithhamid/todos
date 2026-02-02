import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(255)
  text?: string;


  @IsString()
  @IsOptional()
  @IsNotEmpty()
  status?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  gender?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  description?: string;
}
