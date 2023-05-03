import { Component, Input, OnInit, Output } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { EventEmitter } from '@angular/core';
import { ShowMedicalServiceModalWindowComponent } from '../../modal_window/show-medical-service-modal-window/show-medical-service-modal-window.component';
@Component({
  selector: 'ngx-show-medical-service-button',
  templateUrl: './show-medical-service-button.component.html',
  styleUrls: ['./show-medical-service-button.component.scss']
})
export class ShowMedicalServiceButtonComponent implements OnInit {
  renderValue: string;
  @Input() value: string | number;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }
  onShowMedicalService(value) {
    this.dialogService.open(ShowMedicalServiceModalWindowComponent, {
      context: {
        toDialogMedicalServiceName: this.value
      },
    });
    //.onClose.subscribe(name => name && this.names.push(name));
  }
}
