import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,
    RouterModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {
   constructor(private router: Router) { }

  navigateToNewNote(): void {
    // Navegación programática a la ruta de nueva nota
    this.router.navigate(['/home']);
  }
}

