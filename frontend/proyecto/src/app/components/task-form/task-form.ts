import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Task } from '../../service/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
  imports: [CommonModule,FormsModule,RouterModule]
})
export class TaskFormComponent implements OnInit {
  isEditMode: boolean = false;
  public task: Task;

  constructor(){
    this.task = { 
      id: undefined,
      title: "",
      description:""
    }
  }

  ngOnInit() {
    // Lógica de inicialización
  }
  saveTask() {
    // Aquí va la lógica para guardar la tarea
    console.log('Tarea guardada');
  }
}

