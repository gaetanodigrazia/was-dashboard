import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  constructor(protected dialogRef: NbDialogRef<DialogComponent>) { }

  title: string;
  message: string;

  ngOnInit(): void {
  }

  close(answer){
    this.dialogRef.close(answer);
  }


}
