import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Customer } from '../../../../model/customer';
import { ShowDetailsModalComponent } from '../../modal_window/show-details-modal/show-details-modal.component';

@Component({
  selector: 'ngx-show-details-button',
  templateUrl: './show-details-button.component.html',
  styleUrls: ['./show-details-button.component.scss']
})
export class ShowDetailsButtonComponent implements OnInit {

  button_css_status: string;
  disabled: boolean;
  renderValue: string;
  getFunction: boolean;
  @Input() value = {} as Customer;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = 'Dettagli';
    this.button_css_status = "info";
    this.getFunction = true;
  }
  onPressed(value) {
    if (value == true) {
      this.dialogService.open(ShowDetailsModalComponent, {
        context: {
          toDialog: this.value
        },
      });
    }
    //.onClose.subscribe(name => name && this.names.push(name));
  }
}