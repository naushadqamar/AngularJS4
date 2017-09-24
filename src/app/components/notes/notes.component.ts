import { Component, OnInit,Inject } from '@angular/core';

import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { NotesDialogueComponent } from '../notes-dialogue/notes-dialogue.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
notes:Notes[];
isChecked = true;

colours = [
  'yellowDivStyle',
  'lightblueDivStyle',
  'redDivStyle'
];

constructor(public dialog: MdDialog) { }

  ngOnInit() {
      this.notes = [
                      {
                      notesText:"Remeber to feed the Dog",
                      notesColour:'redDivStyle'
                      },
                      {
                        notesText:"Buy Shampoo",
                        notesColour:'yellowDivStyle'
                      },
                      {
                      notesText:"Buy Shampoo",
                      notesColour:'lightblueDivStyle'
                      }
                  ]
  }

  public addNotes(note,selectedClr){
    this.notes.unshift({
    notesText:note,
    notesColour:selectedClr
  });
    return false;
  }
  openDialog(): void {
      let dialogRef = this.dialog.open(NotesDialogueComponent, {
        width: '600px'

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed:${result}');
        console.log( result);
        var str_array = result.split(',');
        this.addNotes(str_array[0],str_array[1]);
      });
    }

    OnFilter(event,coulour){
      console.log(event);
    //  alert(coulour);

    }
}

interface Notes{
  notesText:string,
  notesColour:string;
}
