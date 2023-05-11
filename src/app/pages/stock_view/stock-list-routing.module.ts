import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockCreateComponent } from './stock-forms/stock-create/stock-create.component';
import { StockRouterComponent } from './stock-router.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';



const routes: Routes = [{
  path: '',
  component: StockRouterComponent,
  children: [ {
    path: 'form/:action',
    component: StockCreateComponent,
  }, {
    path: 'list/:status',
    component: StockListComponent,
  }, {
    path: 'dashboard/:userId',
    component: StockDashboardComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockListRoutingModule { }


