import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { isThisTypeNode } from 'typescript';
import { Booking } from '../../../../model/booking';
import { Citizen } from '../../../../model/citizen';
import { BookingService } from '../../../../shared/booking.service';
import { ShowCitizenModalWindowComponent } from '../show-citizen-modal-window/show-citizen-modal-window.component';

@Component({
  selector: 'ngx-charge-report-modal-window',
  templateUrl: './charge-report-modal-window.component.html',
  styleUrls: ['./charge-report-modal-window.component.scss']
})
export class ChargeReportModalWindowComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  citizen: Citizen | any = "";
  disabled: boolean;
  constructor(protected ref: NbDialogRef<ShowCitizenModalWindowComponent>, private booking_service: BookingService) { 
  }
  @Input() toDialog: Booking;

  ngOnInit(): void {
    console.log("Lo stato in charge report modal window è " + this.toDialog.status)
    if (this.toDialog.status == 1) {
      this.disabled = true;
    }
    // this.booking_service.getBookingsById(this.toDialogSSN).subscribe(result => {
    //   this.citizen = result;
    //   console.log(this.citizen);
    //   console.log(this.citizen.ref_categoria);
    // });
  }
  cancel() {
    this.ref.close(false);
  }

  submit(firstname, lastname, email, cellphone) {
    this.citizen.firstname = firstname;
    this.citizen.lastname = lastname;
    this.citizen.email = email;
    this.citizen.cellphone = cellphone;
    if (confirm("Vuoi davvero salvare le modifiche?")) {
      //this.citizen_service.updateCitizen(this.citizen).subscribe(() => this.ref.close());

    }

  }

}
