import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesDialogueComponent } from './components/notes-dialogue/notes-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesDialogueComponent
  ],
   entryComponents: [NotesDialogueComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
