import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-forms/customer-create/customer-create.component';
import { CustomerRouterComponent } from './customer-router.component';



const routes: Routes = [{
  path: '',
  component: CustomerRouterComponent,
  children: [ {
    path: 'create',
    component: CustomerCreateComponent,
  }, {
    path: 'list',
    component: CustomerListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerListRoutingModule { }


