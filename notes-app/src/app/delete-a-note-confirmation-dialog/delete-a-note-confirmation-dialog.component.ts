import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NotesFacade } from '../shared/+state/notes.facade';
import { NotesDto } from '../shared/core/notes.dto';

@Component({
  selector: 'app-delete-a-note-confirmation-dialog',
  templateUrl: './delete-a-note-confirmation-dialog.component.html',
  styleUrls: ['./delete-a-note-confirmation-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteANoteConfirmationDialogComponent {
private readonly _facade = inject(NotesFacade);

  private readonly _dialogRef = inject(DialogRef);

  public readonly data = inject<{ noteId: string, noteName: string }>(MAT_DIALOG_DATA);

  public deleteNote(): void {
    this._facade.deleteANote(this.data.noteId); 
    this._dialogRef.close();
  }
}
