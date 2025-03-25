import { createNote, deleteANote, filterNotesByQuery, loadAllNotes, updateANote } from './notes.actions';
import { Injectable } from "@angular/core";
import { NotesState } from "./notes.reducer";
import { Store } from "@ngrx/store";
import * as NotesSelectors from './notes.selectors';
import { filter, tap } from 'rxjs';
import { NotesDto } from '../core/notes.dto';

@Injectable()
export class NotesFacade {
      public readonly notes$ = this._store.select(NotesSelectors.selectNotes).pipe(filter
            (v => !!v) 
      );

      public readonly isLoadingNotes$ = this._store.select(NotesSelectors.selectIsLoadingNotes);

      constructor(private readonly _store: Store<NotesState>) { }

      public loadAllNotes(): void {
            this._store.dispatch(loadAllNotes());
      }

      public createNote(note: Partial<NotesDto>): void {
            this._store.dispatch(createNote({ note }));
      }

      public updateANote(note: Partial<NotesDto>): void {
            this._store.dispatch(updateANote({ note }));
      }

      public deleteANote(noteId: string): void {
            this._store.dispatch(deleteANote({ noteId }));
      }

      public filterNotesByQuery(query: string): void {
            this._store.dispatch(filterNotesByQuery({ query }));
      }
}