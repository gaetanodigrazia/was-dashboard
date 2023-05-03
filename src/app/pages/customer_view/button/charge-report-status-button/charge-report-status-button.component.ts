import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Booking } from '../../../../model/booking';
import { ChargeReportModalWindowComponent } from '../../modal_window/charge-report-modal-window/charge-report-modal-window.component';
import { ShowMedicalServiceModalWindowComponent } from '../../modal_window/show-medical-service-modal-window/show-medical-service-modal-window.component';

@Component({
  selector: 'ngx-charge-report-status',
  templateUrl: './charge-report-status-button.component.html',
  styleUrls: ['./charge-report-status-button.component.scss']
})
export class ChargeReportStatusButtonComponent implements OnInit {
  button_css_status: string;
  disabled: boolean;
  renderValue: string;
  getFunction: boolean;
  @Input() value = {} as Booking;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    if (this.value.status == 0) {
      this.renderValue = 'Carica report';
      this.button_css_status = "warning";
      this.getFunction = true;
    } else {
      this.renderValue = 'Eseguita';
      this.button_css_status = "info";
      this.getFunction = false;
    }
  }
  onPressed(value) {
    if (value == true) {
      this.dialogService.open(ChargeReportModalWindowComponent, {
        context: {
          toDialog: this.value
        },
      });
    }
    //.onClose.subscribe(name => name && this.names.push(name));
  }
}
