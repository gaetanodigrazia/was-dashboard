import { Component, Input, OnInit, Output } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowCitizenModalWindowComponent } from '../../modal_window/show-citizen-modal-window/show-citizen-modal-window.component';
@Component({
  selector: 'ngx-show-citizen-button',
  templateUrl: './show-citizen-button.component.html',
  styleUrls: ['./show-citizen-button.component.scss']
})
export class ShowCitizenButtonComponent implements OnInit {
  renderValue: string;
  @Input() value: string | number;
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }
  onShowCitizenPressed() {
    this.dialogService.open(ShowCitizenModalWindowComponent, {
      context: {
        toDialogSSN: this.value
      },
    }); /**
    .onClose.subscribe(returnedObj => {
      if (returnedObj == false) { } else {
        if (confirm("Vuoi davvero salvare le modifiche?")) {
          
        }
      }
      console.log(returnedObj);
    }); */
  }
}
