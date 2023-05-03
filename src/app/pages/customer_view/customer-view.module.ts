import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerListRoutingModule } from './customer-list-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ShowCitizenButtonComponent } from './button/show-citizen-button/show-citizen-button.component';
import { ShowMedicalServiceButtonComponent } from './button/show-medical-service-button/show-medical-service-button.component';
import { ShowCitizenModalWindowComponent } from './modal_window/show-citizen-modal-window/show-citizen-modal-window.component';
import { ShowMedicalServiceModalWindowComponent } from './modal_window/show-medical-service-modal-window/show-medical-service-modal-window.component';
import { ChargeReportStatusButtonComponent } from './button/charge-report-status-button/charge-report-status-button.component';
import { ShowReportStatusComponent } from './button/show-report-status/show-report-status.component';
import { DeleteBookingButtonComponent } from './button/delete-booking-button/delete-booking-button.component';
import { ChargeReportModalWindowComponent } from './modal_window/charge-report-modal-window/charge-report-modal-window.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { CustomerCreateComponent } from './customer-forms/customer-create/customer-create.component';
import { CustomerRouterComponent } from './customer-router.component';

const components = [
  CustomerRouterComponent, CustomerListComponent, CustomerCreateComponent,
  ShowCitizenButtonComponent, ShowMedicalServiceButtonComponent,
  ShowCitizenModalWindowComponent, ShowMedicalServiceModalWindowComponent,
  ChargeReportStatusButtonComponent, ShowReportStatusComponent,
  DeleteBookingButtonComponent, ChargeReportModalWindowComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, CustomerListRoutingModule, NbCardModule, 
    Ng2SmartTableModule, NbButtonModule, NbIconModule, NbInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CustomerViewModule { }
