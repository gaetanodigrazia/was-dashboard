import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockListRoutingModule } from './stock-list-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { StockCreateComponent } from './stock-forms/stock-create/stock-create.component';
import { StockRouterComponent } from './stock-router.component';
import { ShowDetailsModalComponent } from './modal_window/show-details-modal/show-details-modal.component';
import { DeleteModalWindowComponent } from './modal_window/delete-modal-window/delete-modal-window.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';

const components = [
  StockDashboardComponent, StockCreateComponent, StockListComponent,
  ShowDetailsModalComponent, DeleteModalWindowComponent, StockRouterComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, StockListRoutingModule, NbCardModule, 
    Ng2SmartTableModule, NbButtonModule, NbIconModule, NbInputModule, NbTabsetModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class StockViewModule { }
