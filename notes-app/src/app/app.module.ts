import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NOTES_FEATURE_KEY, notesReducer } from './shared/+state/notes.reducer';
import { NotesEffects } from './shared/+state/notes.effects';
import { NotesFacade } from './shared/+state/notes.facade'; 

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarComponent,
    SidenavComponent,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(NOTES_FEATURE_KEY, notesReducer),
    EffectsModule.forRoot([NotesEffects]) 
  ],
  providers: [provideAnimations(), NotesFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
