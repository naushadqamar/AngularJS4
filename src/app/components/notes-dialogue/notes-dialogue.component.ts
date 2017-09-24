import { Component, OnInit,Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-notes-dialogue',
  templateUrl: './notes-dialogue.component.html',
  styleUrls: ['./notes-dialogue.component.css']
})
export class NotesDialogueComponent implements OnInit {
notes:string;
selectedClr: string;

 colours = [
   'yellowDivStyle',
   'lightblueDivStyle',
   'redDivStyle'
 ];
  constructor(public thisDialogRef:MdDialogRef<NotesDialogueComponent>,
     @Inject(MD_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm(notes,va){
    this.thisDialogRef.close(notes+','+this.selectedClr);
  }
  onCloseCancel(){

    this.thisDialogRef.close('Cancel');
  }

}
