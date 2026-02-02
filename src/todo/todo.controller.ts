import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {} // dependency injection

  @Post()
  async create(
    @Body() createTodoDto: CreateTodoDto,
  ): Promise<unknown> {
    return await this.todoService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<unknown> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<unknown> {
    return await this.todoService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<unknown> {
    return await this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    await this.todoService.remove(id);
    return { message: 'Todo deleted successfully' };
  }
}
