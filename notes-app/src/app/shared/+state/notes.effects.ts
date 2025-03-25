import { createNoteFailure, createNoteSuccess, loadAllNotes, loadAllNotesFailure, loadAllNotesSuccess, NotesActions, NotesActionsUnion } from './notes.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; 
import { switchMap, map, catchError, of, withLatestFrom } from 'rxjs';
import { NotesService } from '../services/notes.service';
import { NotesDto } from '../core/notes.dto';

@Injectable()
export class NotesEffects {
  public readonly loadAllNotes$ = createEffect(() =>
    this._actions$.pipe(
      ofType(NotesActions.LOAD_ALL_NOTES), 
      switchMap(() =>
        this._notesService.getAll().pipe(
          map((notes) => loadAllNotesSuccess({ notes })),
          catchError((error) => of(loadAllNotesFailure({ error }))),
        ),
      ),
    ),
  ); 

  constructor(
    private readonly _actions$: Actions<NotesActionsUnion>, 
    private readonly _notesService: NotesService
  ) {}
}