import { union, props, createAction } from '@ngrx/store';
import { NotesDto } from '../core/notes.dto';

export enum NotesActions {
      RESET_STATE = '[Notes] Reset state',

      LOAD_ALL_NOTES = '[Notes] Load all notes',
      LOAD_ALL_NOTES_SUCCESS = '[Notes] Load all notes success',
      LOAD_ALL_NOTES_FAILURE = '[Notes] Load all notes failure',

      FILTER_NOTES_BY_QUERY = '[Notes] Filter notes by query',
      FILTER_NOTES_BY_QUERY_SUCCESS = '[Notes] Filter notes by query success',
      FILTER_NOTES_BY_QUERY_FAILURE = '[Notes] Filter notes by query failure',

      CREATE_NOTE = '[Notes] Create a note',
      CREATE_NOTE_SUCCESS = '[Notes] Create a note success',
      CREATE_NOTE_FAILURE = '[Notes] Create a note failure',

      UPDATE_A_NOTE = '[Notes] Update a note',
      UPDATE_A_NOTE_SUCCESS = '[Notes] Update a note success',
      UPDATE_A_NOTE_FAILURE = '[Notes] Update a note failure',

      DELETE_A_NOTE = '[Notes] Delete a note',
      DELETE_A_NOTE_SUCCESS = '[Notes] Delete a note success',
      DELETE_A_NOTE_FAILURE = '[Notes] Delete a note failure',
}

export const resetState = createAction(
      NotesActions.RESET_STATE
);

export const loadAllNotes = createAction(
      NotesActions.LOAD_ALL_NOTES
);

export const loadAllNotesSuccess = createAction(
      NotesActions.LOAD_ALL_NOTES_SUCCESS,
      props<{ notes: NotesDto[] }>()
);

export const loadAllNotesFailure = createAction(
      NotesActions.LOAD_ALL_NOTES_FAILURE,
      props<{ error: any }>()
);

export const filterNotesByQuery = createAction(
      NotesActions.FILTER_NOTES_BY_QUERY,
      props<{ query: string }>()
);

export const filterNotesByQuerySuccess = createAction(
      NotesActions.FILTER_NOTES_BY_QUERY_SUCCESS 
);

export const filterNotesByQueryFailure = createAction(
      NotesActions.LOAD_ALL_NOTES_FAILURE,
      props<{ error: any }>()
);

export const createNote = createAction(
      NotesActions.CREATE_NOTE,
      props<{ note: Partial<NotesDto> }>()
);

export const createNoteSuccess = createAction(
      NotesActions.CREATE_NOTE_SUCCESS
);

export const createNoteFailure = createAction(
      NotesActions.CREATE_NOTE_FAILURE,
      props<{ error: any }>()
);

export const updateANote = createAction(
      NotesActions.UPDATE_A_NOTE,
      props<{ note: Partial<NotesDto> }>()
);

export const updateANoteSuccess = createAction(
      NotesActions.UPDATE_A_NOTE_SUCCESS
);

export const updateANoteFailure = createAction(
      NotesActions.UPDATE_A_NOTE_FAILURE,
      props<{ error: any }>()
);

export const deleteANote = createAction(
      NotesActions.DELETE_A_NOTE,
      props<{ noteId: string }>()
);

export const deleteANoteSuccess = createAction(
      NotesActions.DELETE_A_NOTE_SUCCESS,

);

export const deleteANoteFailure = createAction(
      NotesActions.DELETE_A_NOTE_FAILURE,
      props<{ error: any }>()
);

const notesActionsUnion = union({
      resetState,

      loadAllNotes,
      loadAllNotesSuccess,
      loadAllNotesFailure,

      filterNotesByQuery,
      filterNotesByQuerySuccess,
      filterNotesByQueryFailure,

      createNote,
      createNoteSuccess,
      createNoteFailure,

      updateANote,
      updateANoteSuccess,
      updateANoteFailure,

      deleteANote,
      deleteANoteSuccess,
      deleteANoteFailure
});

export type NotesActionsUnion = typeof notesActionsUnion;