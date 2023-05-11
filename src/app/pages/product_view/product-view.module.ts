import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { ProductCreateComponent } from './product-forms/product-create/product-create.component';
import { ProductRouterComponent } from './product-router.component';
import { ShowDetailsModalComponent } from './modal_window/show-details-modal/show-details-modal.component';
import { DeleteModalWindowComponent } from './modal_window/delete-modal-window/delete-modal-window.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

const components = [
  ProductDashboardComponent, ProductCreateComponent, ProductListComponent,
  ShowDetailsModalComponent, DeleteModalWindowComponent, ProductRouterComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, ProductListRoutingModule, NbCardModule, 
    Ng2SmartTableModule, NbButtonModule, NbIconModule, NbInputModule, NbTabsetModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ProductViewModule { }
