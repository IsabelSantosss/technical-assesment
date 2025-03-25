import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NotesFacade } from '../shared/+state/notes.facade';
import { NotesDto } from '../shared/core/notes.dto';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-create-update-a-note',
  templateUrl: './create-update-a-note.component.html',
  styleUrls: ['./create-update-a-note.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, MatSelectModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUpdateANoteComponent implements OnInit {
  private readonly _formBuilder = inject(FormBuilder);

  private readonly _facade = inject(NotesFacade);

  private readonly _dialogRef = inject(DialogRef);

  public readonly data = inject<{ note: NotesDto }>(MAT_DIALOG_DATA);

  public readonly priorityOptions: number[] = Array.from({ length: 3 }, (_, i) => i + 1);

  public readonly form: FormGroup = this._initForm();

  public readonly name = this.form.get('name');

  public readonly priority = this.form.get('priority');

  public readonly status = this.form.get('status');

  public ngOnInit(): void {
    this._patchForm();
  }

  private _initForm(): FormGroup {
    return this._formBuilder.group({
      name: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      status: ['', [Validators.required]]
    })
  }

  private _patchForm(): void { 
    if (this.data?.note?.id) {
      const { name, priority, status } = this.data.note;

      this.name?.patchValue(name);
      this.priority?.patchValue(priority);
      this.status?.patchValue(status);
    }
  }

  public saveNote(): void {
    const { name, priority, status } = this.form.value;
    let note: NotesDto = { name, priority, status };

    if (this.data.note.id) {
      note = { ...this.data.note, ...note };

      this._facade.updateANote(note);
    } else {
      this._facade.createNote(note);
    }

    this._dialogRef.close();
  }
}
