import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiTags } from '@nestjs/swagger';
import { Task } from './task.entity';

@ApiTags('tasks') 
@Controller('api/tasks') // Define el endpoint de la API
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()  // Crear una tarea
  create(@Body() task: Task) {
    return this.taskService.create(task);
  }

  @Get()  // Obtener todas las tareas
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')  // Obtener una tarea por ID
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);  // Convierte el ID a número
  }

  @Put(':id')  // Actualizar una tarea por ID
  update(@Param('id') id: string, @Body() task: Task) {
    return this.taskService.update(+id, task);
  }

  @Delete(':id')  // Eliminar una tarea por ID
  remove(@Param('id') id: string) {
    return this.taskService.delete(+id);
  }
}