import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-forms/product-create/product-create.component';
import { ProductRouterComponent } from './product-router.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';



const routes: Routes = [{
  path: '',
  component: ProductRouterComponent,
  children: [ {
    path: 'form/:action',
    component: ProductCreateComponent,
  }, {
    path: 'list/:status',
    component: ProductListComponent,
  }, {
    path: 'dashboard/:userId',
    component: ProductDashboardComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListRoutingModule { }


