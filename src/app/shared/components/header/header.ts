import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteForm } from '../../../features/notes/components/note-form/note-form';
import { NoteWall } from '../../../features/notes/components/note-wall/note-wall';
import { NoteDetail } from '../../../features/notes/components/note-detail/note-detail';
import { Note } from '../../../core/models/notes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NoteWall, NoteForm],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showForm = false;
  selectedNote?: Note;

  toggleForm() {
    this.showForm = !this.showForm;
    this.selectedNote = undefined; // Asegura que no muestres el detalle mientras agregas.
  }

  openNote(note: Note) {
    this.selectedNote = note;
    this.showForm = false;
  }

  closeDetail() {
    this.selectedNote = undefined;
  }
}
