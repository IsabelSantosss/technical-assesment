import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NOTES_FEATURE_KEY, NotesState } from "./notes.reducer";

export const selectNotesState = createFeatureSelector<NotesState>(
      NOTES_FEATURE_KEY
);

export const selectIsLoadingNotes = createSelector(
      selectNotesState,
      ({ isLoadingNotes }) => isLoadingNotes
);

export const selectNotes = createSelector(
      selectNotesState,
      ({ notes, query }) => {
            return notes ? query ? notes.filter((note) => note.name.toLowerCase().includes(query.toLowerCase())) : notes : [];
      }
);