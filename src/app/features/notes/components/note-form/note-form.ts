import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [],
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm {
 @Output() cancel = new EventEmitter<void>();
}
