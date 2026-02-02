import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Todo } from '../todo/todo.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  email: string;

  // Store a hash, never the raw password.
  @Column({ name: 'passwordHash', length: 255 })
  passwordHash: string;

  // Explicit type fixes "Data type Object" (TS union types confuse reflect-metadata).
  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  name: string | null;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
