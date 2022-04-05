import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListRoutingModule, routedComponents } from '../routing/booking-list-routing.module';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ShowCitizenButtonComponent } from '../button/show-citizen-button/show-citizen-button.component';
import { ShowMedicalServiceButtonComponent } from '../button/show-medical-service-button/show-medical-service-button.component';

import { ShowCitizenModalWindowComponent } from '../modal_window/show-citizen-modal-window/show-citizen-modal-window.component';
import { ShowMedicalServiceModalWindowComponent } from '../modal_window/show-medical-service-modal-window/show-medical-service-modal-window.component';
import { ChargeReportStatusButtonComponent } from '../button/charge-report-status-button/charge-report-status-button.component';
import { ShowReportStatusComponent } from '../button/show-report-status/show-report-status.component';
import { DeleteBookingButtonComponent } from '../button/delete-booking-button/delete-booking-button.component';
import { ChargeReportModalWindowComponent } from '../modal_window/charge-report-modal-window/charge-report-modal-window.component';

@NgModule({
  declarations: [...routedComponents,
    ShowCitizenButtonComponent, ShowMedicalServiceButtonComponent,
    ShowCitizenModalWindowComponent, ShowMedicalServiceModalWindowComponent,
    ChargeReportStatusButtonComponent, ShowReportStatusComponent,
    DeleteBookingButtonComponent, ChargeReportModalWindowComponent],

  imports: [
    CommonModule, BookingListRoutingModule, NbCardModule, Ng2SmartTableModule, NbButtonModule, NbIconModule, NbInputModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class BookingListModule { }
