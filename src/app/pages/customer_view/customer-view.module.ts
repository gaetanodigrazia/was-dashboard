import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerListRoutingModule } from './customer-list-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { CustomerCreateComponent } from './customer-forms/customer-create/customer-create.component';
import { CustomerRouterComponent } from './customer-router.component';
import { ShowDetailsModalComponent } from './modal_window/show-details-modal/show-details-modal.component';
import { DeleteModalWindowComponent } from './modal_window/delete-modal-window/delete-modal-window.component';

const components = [
  CustomerRouterComponent, CustomerListComponent, CustomerCreateComponent,
  ShowDetailsModalComponent, DeleteModalWindowComponent
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
