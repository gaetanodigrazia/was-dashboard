import { utf8Encode } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import * as moment from 'moment';
import { LocalDataSource } from 'ng2-smart-table';
import { Booking } from '../../../../model/booking';
import { Citizen } from '../../../../model/citizen';
import { MedicalService } from '../../../../model/medical_service';
import { BookingService } from '../../../../shared/booking.service';
import { CitizenService } from '../../../../shared/citizen.service';
import { MedicalServiceService } from '../../../../shared/medical_service.service';
import { ShowCitizenModalWindowComponent } from '../show-citizen-modal-window/show-citizen-modal-window.component';

@Component({
  selector: 'ngx-new-booking-modal-window',
  templateUrl: './new-booking-modal-window.component.html',
  styleUrls: ['./new-booking-modal-window.component.scss']
})
export class NewBookingModalWindowComponent implements OnInit {
  min: Date;
  max: Date;
  selected_medicalservice = {} as MedicalService;
  source: LocalDataSource = new LocalDataSource();
  citizen: Citizen | any = "";
  booking = {} as Booking;
  medicalservices: MedicalService | any = "";
  constructor(protected ref: NbDialogRef<ShowCitizenModalWindowComponent>, private citizen_service: CitizenService, private medicalService_service: MedicalServiceService,
    private bookingService: BookingService,
    protected dateService: NbDateService<Date>) { }
  @Input() toDialogSSN: any;

  ngOnInit(): void {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
    this.citizen_service.getBySSN(this.toDialogSSN).subscribe(result => {
      this.citizen = result;
      console.log(this.citizen);
      console.log(this.citizen.ref_categoria);
    });
    this.medicalService_service.getMedicalServices().subscribe(result => {
      this.medicalservices = result;
      console.log(this.medicalservices);
    });
  }
  cancel() {
    this.ref.close(false);
  }

  fillDatePicker(selectedMedicalService: string) {
    console.log("Value changed");
    console.log(selectedMedicalService);
  }
  submit(ssn) {
    console.log(this.selected_medicalservice.nome);
    this.booking.dataRichiesta = this.getMoment();
    this.booking.codicePrenotazione = this.generateBookingCode(this.citizen.ssn);
    this.booking.dataPrenotazione = "2021-06-29 02:00:00";
    this.booking.oraPrenotazione = "15:33:00";
    this.booking.cittadino = this.citizen;
    // this.booking.cittadino.id = this.citizen.id;
    this.booking.prestazione = this.selected_medicalservice;
    if (confirm("Vuoi davvero salvare le modifiche?")) {
      this.bookingService.insertBooking(this.booking).subscribe(() => this.ref.close());

    }
  }
  generateBookingCode(ssn) {
    let outString_first: string = '';
    let outString_second: string = '';
    let inOptions: string = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ' + ssn;
    let nlast: string = new Date().getTime().toString().slice(-6);
    for (let i = 0; i < 4; i++) {
      outString_first += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }
    for (let i = 0; i < 4; i++) {
      outString_second += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    }

    return outString_first + nlast + outString_second;
  }

  getMoment() {
    let now = new Date();
    return moment(now).format('YYYY-MM-DD HH:MM:SS');
  }
}
