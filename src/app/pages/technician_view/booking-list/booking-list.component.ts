import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from '../../../shared/booking.service';
import { Booking } from '../../../model/booking';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { NbDialogService } from '@nebular/theme';
import { ShowCitizenButtonComponent } from '../button/show-citizen-button/show-citizen-button.component';
import { ShowMedicalServiceButtonComponent } from '../button/show-medical-service-button/show-medical-service-button.component';
import { Citizen } from '../../../model/citizen';
import { ChargeReportStatusButtonComponent } from '../button/charge-report-status-button/charge-report-status-button.component';
import { ShowReportStatusComponent } from '../button/show-report-status/show-report-status.component';
import { DeleteBookingButtonComponent } from '../button/delete-booking-button/delete-booking-button.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit {
  booking: Booking[];
  to_query_status: number;
  private sub: any;
  @Input() value;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      dataPrenotazione: {
        title: 'Data prenotazione',
        type: 'string',
        filter: false,
        valuePrepareFunction: (date) => {
          var raw = new Date(date);
          var formatted = new DatePipe('en-EN').transform(raw, 'dd/MM/yyyy ore hh:mm');
          return formatted;
        }
      },
      // oraPrenotazione: {
      //   title: 'Ora prenotazione',
      //   type: 'string',
      //   valuePrepareFunction: (date) => {
      //     console.log(date)
      //     return date;
      //   },
      //   filter: false
      // },
      status: {
        title: 'Status',
        type: "custom",
        valuePrepareFunction: (cell, row) => {
          return row;
        },
        renderComponent: ChargeReportStatusButtonComponent,
        filter: false
      },
      codicePrenotazione: {
        title: 'Codice prenotazione',
        type: 'string',
      },
      dataEsecuzione: {
        title: 'Data esecuzione',
        type: 'custom',
        valuePrepareFunction: (cell, row) => {
          return row;
        },
        renderComponent: ShowReportStatusComponent,
        filter: false
      },
      prestazione: {
        title: 'Prestazione',
        type: 'custom',
        valuePrepareFunction: (cell, row) => {
          return row.prestazione.nome;
        },
        renderComponent: ShowMedicalServiceButtonComponent,
        filterFunction(cell?: Booking, search?: Booking): boolean {
          if (cell >= search || search === null) {
            return true;
          } else {
            return false;
          }
        }
      },
      cittadino: {
        title: 'Cittadino',
        type: 'custom',
        valuePrepareFunction: (cell, row) => {
          return row.cittadino.ssn;
        },
        renderComponent: ShowCitizenButtonComponent,
        filterFunction(cell?: Citizen, search?: string): boolean {
          console.log(cell);
          console.log(search);
          if (cell.ssn >= search || search === null) {
            return true;
          } else {
            return false;
          }
        }
      },
      elimina: {
        title: 'Elimina',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          return row.id;
        },
        renderComponent: DeleteBookingButtonComponent
      },
    },

  };
  source: LocalDataSource = new LocalDataSource();
  data: Booking[];

  constructor(private bookingService: BookingService, private dialogService: NbDialogService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(params => {
      if (params['status'] === "active") {
        this.to_query_status = 0;
      } else {
        this.to_query_status = 1;
      };
      console.log(params)
    });
    /*This do the trick!*/
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {

    this.bookingService.getBookingsByStatus(this.to_query_status).subscribe(booking => {
      this.booking = booking;
      console.log(this.booking);
      this.source.load(this.booking);
    });

  }
}
function Schemas(arg0: {}) {
  throw new Error('Function not implemented.');
}
