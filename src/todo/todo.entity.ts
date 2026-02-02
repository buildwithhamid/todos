import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  text: string;

  @Column({ type: 'text' })
  status: string;
  
  @Column({ type: 'text' })
  gender: string;

  @Column({ type: 'text' })
  description: string;

  // Nullable for now so existing Todo endpoints keep working
  // until we protect them with JWT and always set the authenticated user.
  @Column({ type: 'int', nullable: true })
  userId: number | null;

  @ManyToOne(() => User, (user) => user.todos, { nullable: true })
  @JoinColumn({ name: 'userId' })
  user: User | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
