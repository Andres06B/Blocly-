import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.css'
})
export class Loader {
  @Input() message: string = 'Preparando tu espacio creativo...';
}
