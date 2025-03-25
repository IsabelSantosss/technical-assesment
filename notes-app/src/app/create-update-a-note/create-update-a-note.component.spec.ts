import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateANoteComponent } from './create-update-a-note.component';

describe('CreateUpdateANoteComponent', () => {
  let component: CreateUpdateANoteComponent;
  let fixture: ComponentFixture<CreateUpdateANoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateANoteComponent]
    });
    fixture = TestBed.createComponent(CreateUpdateANoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
