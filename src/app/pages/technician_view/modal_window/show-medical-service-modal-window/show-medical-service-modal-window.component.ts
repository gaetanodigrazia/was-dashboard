import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { MedicalService } from '../../../../model/medical_service';
import { MedicalServiceService } from '../../../../shared/medical_service.service';
@Component({
  selector: 'ngx-show-medical-service-modal-window',
  templateUrl: './show-medical-service-modal-window.component.html',
  styleUrls: ['./show-medical-service-modal-window.component.scss']
})
export class ShowMedicalServiceModalWindowComponent implements OnInit {
  medicalservice: MedicalService | any = "";
  source: LocalDataSource = new LocalDataSource();
  @Input() toDialogMedicalServiceName: any;

  constructor(protected ref: NbDialogRef<ShowMedicalServiceModalWindowComponent>, private medicalservice_service: MedicalServiceService) { }
  names: string[] = [];


  ngOnInit(): void {
    this.medicalservice_service.getByName(this.toDialogMedicalServiceName).subscribe(result => {
      this.medicalservice = result;
      console.log(this.medicalservice);
    });
  }
  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}