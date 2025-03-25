import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteANoteConfirmationDialogComponent } from './delete-a-note-confirmation-dialog.component';

describe('DeleteANoteConfirmationDialogComponent', () => {
  let component: DeleteANoteConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteANoteConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteANoteConfirmationDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteANoteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
