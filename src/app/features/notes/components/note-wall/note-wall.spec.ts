import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteWall } from './note-wall';

describe('NoteWall', () => {
  let component: NoteWall;
  let fixture: ComponentFixture<NoteWall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteWall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteWall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
