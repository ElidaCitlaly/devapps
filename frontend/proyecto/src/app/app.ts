import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // Aquí es `styleUrls` (con "s"), no `styleUrl`
})
export class App {
  protected title = 'proyecto';
}
