import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Loader } from '../../../../shared/components/loader/loader';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,
    RouterModule, Loader],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {
showLoader: boolean = false;

  constructor(private router: Router) {}

  navigateToNewNote() {
    this.showLoader = true;
    
    // Simula un tiempo de carga antes de navegar
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000); 
  }
}

