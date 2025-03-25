import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NotesFacade } from '../shared/+state/notes.facade';
import { CommonModule } from '@angular/common';
import { NotesDto } from '../shared/core/notes.dto';
import { debounceTime, Observable, startWith } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateUpdateANoteComponent } from '../create-update-a-note/create-update-a-note.component';
import { MatChipsModule } from '@angular/material/chips';
import { DeleteANoteConfirmationDialogComponent } from '../delete-a-note-confirmation-dialog/delete-a-note-confirmation-dialog.component';
@Component({
  selector: 'app-my-notes-page',
  templateUrl: './my-notes-page.component.html',
  styleUrls: ['./my-notes-page.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatTableModule, MatMenuModule, MatDialogModule, MatChipsModule]
})
export class MyNotesPageComponent implements OnInit {

  private readonly _facade = inject(NotesFacade);

  private readonly _dialog = inject(MatDialog);

  public readonly columns: string[] = ['name', 'priority', 'createdOn', 'status', 'actions'];

  public readonly searchControl = new FormControl('');

  public readonly notes$: Observable<NotesDto[]> = this._facade.notes$;

  public readonly isLoadingNotes$ = this._facade.isLoadingNotes$;

  public ngOnInit(): void {
    this._loadAllNotes();
    this._listenToSarch();
  }

  private _loadAllNotes(): void {
    this._facade.loadAllNotes();
  }

  private _listenToSarch(): void {
    this.searchControl.valueChanges.pipe(startWith(''), debounceTime(200)).subscribe((query) => { 
      this._facade.filterNotesByQuery(query ?? '');

    });
  }

  public openCreateDialog(): void {
    this._dialog.open(CreateUpdateANoteComponent, {
      width: '500px'
    })
  }

  public openUpdateDialog(note: NotesDto): void {
    this._dialog.open(CreateUpdateANoteComponent, {
      data: { note },
      width: '500px'
    });
  }

  public openDeleteANoteConfirmation(noteId: string, noteName: string): void {
    this._dialog.open(DeleteANoteConfirmationDialogComponent, {
      data: { noteId, noteName },
      width: '500px'
    });
  }

}

