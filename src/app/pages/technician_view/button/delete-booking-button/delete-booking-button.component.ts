import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BookingService } from '../../../../shared/booking.service';

@Component({
  selector: 'ngx-delete-booking-button',
  templateUrl: './delete-booking-button.component.html',
  styleUrls: ['./delete-booking-button.component.scss']
})
export class DeleteBookingButtonComponent implements OnInit {
  citizen_id: number;
  @Input() value: number;
  constructor(private dialogService: NbDialogService, private booking_service: BookingService) { }

  ngOnInit() {
    this.citizen_id = this.value;
  }
  newBookingFromCitizen() {
    if (confirm("Vuoi davvero salvare le modifiche?")) {
      this.booking_service.deleteBooking(this.citizen_id);
      console.log("Confirmed delete")
    }
  }
}