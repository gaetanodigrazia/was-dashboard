import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NewBookingModalWindowComponent } from '../../modal_window/new-booking-modal-window/new-booking-modal-window.component';

@Component({
  selector: 'ngx-new-booking-button',
  templateUrl: './new-booking-button.component.html',
  styleUrls: ['./new-booking-button.component.scss']
})
export class NewBookingButtonComponent implements OnInit {
  renderValue: string;
  @Input() value: string | number;
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }
  newBookingFromCitizen() {
    this.dialogService.open(NewBookingModalWindowComponent, {
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