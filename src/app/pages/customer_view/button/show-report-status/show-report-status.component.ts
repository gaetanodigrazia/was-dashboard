import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Booking } from '../../../../model/booking';
import { ChargeReportModalWindowComponent } from '../../modal_window/charge-report-modal-window/charge-report-modal-window.component';
import { ShowMedicalServiceModalWindowComponent } from '../../modal_window/show-medical-service-modal-window/show-medical-service-modal-window.component';

@Component({
  selector: 'ngx-show-report-status',
  templateUrl: './show-report-status.component.html',
  styleUrls: ['./show-report-status.component.scss']
})
export class ShowReportStatusComponent implements OnInit {
  button_css_status: string;
  isDisabled: boolean;
  renderValue: string;
  getFunction: boolean;
  @Input() value: Booking;
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    if (this.value.dataEsecuzione == null) {
      this.renderValue = 'Da Eseguire';
      this.button_css_status = "warning";
      this.getFunction = true;
    } else {
      //this.isDisabled = true;
      this.renderValue = this.value.dataEsecuzione;
      this.button_css_status = "info";
      this.getFunction = false;
    }
  }
  onShowCitizenPressed(value) {
    if (value == false) {
      this.dialogService.open(ChargeReportModalWindowComponent, {
        context: {
          toDialog: this.value
        },
      });
    }
    //.onClose.subscribe(name => name && this.names.push(name));
  }
}
