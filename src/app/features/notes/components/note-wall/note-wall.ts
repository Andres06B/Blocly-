import { Component, EventEmitter, Output } from '@angular/core';
import { NoteCard } from '../note-card/note-card';
import { Note } from '../../../../core/models/notes';

@Component({
  selector: 'app-note-wall',
  standalone: true,
  imports: [NoteCard],
  templateUrl: './note-wall.html',
  styleUrl: './note-wall.css'
})
export class NoteWall {
  @Output() noteSelected = new EventEmitter<Note>();

  notes: Note[] = [
    { id: '1', title: 'Nota 1', description: 'Descripción 1', createdAt: new Date().toISOString() },
    { id: '2', title: 'Nota 2', description: 'Descripción 2', createdAt: new Date().toISOString() },
  ];

  selectNote(note: Note) {
    this.noteSelected.emit(note);
  }
}
