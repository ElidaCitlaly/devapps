import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../service/task.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- IMPORTANTE

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
  imports: [CommonModule,FormsModule ],
  
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  deleteTask(id: number) {
    // Aquí pones la lógica de eliminar
    console.log('Eliminar tarea con id:', id);
    // Podrías agregar el delete real cuando tengas el método en el servicio:
    /*
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();  // Recargar la lista después de eliminar
    });
    */
  }
}
