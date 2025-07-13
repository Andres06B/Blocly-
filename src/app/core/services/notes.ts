import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class Notes {
  private apiUrl = 'http://localhost:3000/api/notes';

  constructor(private http: HttpClient) {}

  getNOtes(){
    return this.http.get<Note[]>(this.apiUrl);
  }
  getNOte(id: number) {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }
  createNOte(note: Note) {
    return this.http.post<Note>(this.apiUrl, note);
  }
  updateNOte(id: number, note: Note) {
    return this.http.put<Note>(`${this.apiUrl}/${id}`, note);
  }
  deleteNOte(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
