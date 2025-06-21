import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: number): Promise<Task | null> {
  return this.taskRepository.findOneBy({ id });
}

  create(task: Task): Promise<Task> {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  update(id: number, task: Partial<Task>): Promise<any> {
    return this.taskRepository.update(id, task);
  }

  delete(id: number): Promise<any> {
    return this.taskRepository.delete(id);
  }
}
