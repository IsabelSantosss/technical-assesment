import { Action, createReducer, on } from "@ngrx/store";
import { NotesDto } from "../core/notes.dto";
import * as NotesActions from "./notes.actions";
import { v4 } from "uuid";

export const NOTES_FEATURE_KEY = 'Notes';

export interface NotesState {
      isLoadingNotes: boolean;
      notes?: NotesDto[];
      query: string;
}

export const initialState: NotesState = {
      isLoadingNotes: false,
      query: ''
}

const reducer = createReducer(
      initialState,
      on(NotesActions.loadAllNotes, (state) => ({
            ...state,
            isLoadingNotes: true
      })),
      on(NotesActions.loadAllNotesSuccess, (state, { notes }) => ({
            ...state,
            isLoadingNotes: false,
            notes: notes.map((note) => ({ ...note, createdOn: (new Date(note.createdOn!)).toLocaleDateString() }))
      })),
      on(NotesActions.loadAllNotesFailure, (state) => ({
            ...state,
            isLoadingNotes: false
      })),
      on(NotesActions.createNote, (state, { note }) => ({
            ...state,
            isLoadingNotes: true,
            notes: state.notes ? [...state.notes, { ...note, id: v4(), createdOn: (new Date()).toLocaleDateString() } as NotesDto] : []
      })),
      on(NotesActions.createNoteSuccess, (state) => ({
            ...state,
            isLoadingNotes: false
      })),
      on(NotesActions.createNoteFailure, (state) => ({
            ...state,
            isLoadingNotes: false
      })),
      on(NotesActions.updateANote, (state, { note }) => ({
            ...state,
            isLoadingUpdateNote: true,
            notes: state.notes ? state.notes.map(stateNote => {
                  if (stateNote.id === note.id) {
                        return { ...stateNote, ...note } as NotesDto
                  }

                  return stateNote;
            }) : []
      })),
      on(NotesActions.updateANoteSuccess, (state) => ({
            ...state,
            isLoadingNotes: false
      })),
      on(NotesActions.updateANoteFailure, (state) => ({
            ...state,
            isLoadingNotes: false
      })),
      on(NotesActions.deleteANote, (state, { noteId }) => ({
            ...state,
            isLoadingNotes: true,
            notes: state.notes ? state.notes.filter((stateNote) => stateNote.id !== noteId) : []
      })),
      on(NotesActions.deleteANoteSuccess, (state) => ({
            ...state,
            isLoadingNotes: false
      })),
      on(NotesActions.deleteANoteFailure, (state) => ({
            ...state,
            isLoadingNotes: false
      })),
      on(NotesActions.filterNotesByQuery, (state, { query }) => ({
            ...state,
            isLoadingNotes: true,
            query
      })),
      on(NotesActions.resetState, () => ({
            ...initialState
      }))
);

export function notesReducer(state: NotesState, action: Action): NotesState {
      return reducer(state, action);
}