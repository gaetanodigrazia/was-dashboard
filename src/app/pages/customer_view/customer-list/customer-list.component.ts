import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from '../../../shared/booking.service';
import { ProductService } from '../../../shared/product.service';
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
import { Product } from '../../../model/product';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../shared/customer.service';

@Component({
  selector: 'ngx-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  products: Customer[];
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
      id: {
        title: 'Id',
        type: 'string',
      },
      name: {
        title: 'Nome',
        type: 'string',
      },
      surname: {
        title: 'Cognome',
        type: 'string',
      },
      businessName: {
        title: 'Ragione Sociale',
        type: 'string',
      },
      vatNumber: {
        title: 'Partita Iva',
        type: 'string',
      },
      country: {
        title: 'Nazione',
        type: 'string',
      },
      city: {
        title: 'Città',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: "custom",
        valuePrepareFunction: (cell, row) => {
          return row;
        },
        renderComponent: ChargeReportStatusButtonComponent,
        filter: false
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

  constructor(private customerService: CustomerService, 
    private dialogService: NbDialogService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(params => {
      if (params['status'] === "active") {
        this.to_query_status = 0;
      } else {
        this.to_query_status = 1;
      };
      console.log(params)
    });
    /*This do the trick!*/
    //router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {

/*     this.bookingService.getBookingsByStatus(this.to_query_status).subscribe(booking => {
      this.booking = booking;
      console.log(this.booking);
      this.source.load(this.booking);
    }); */

    this.customerService.getCustomers().subscribe(products => {
      this.products = products;
      console.log(this.products);
      this.source.load(this.products);
    });
  }
}
function Schemas(arg0: {}) {
  throw new Error('Function not implemented.');
}
