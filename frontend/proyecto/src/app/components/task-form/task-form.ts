import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent implements OnInit {
  isEditMode: boolean = false;

  ngOnInit() {
    // Lógica de inicialización
  }
  saveTask() {
    // Aquí va la lógica para guardar la tarea
    console.log('Tarea guardada');
  }
}

