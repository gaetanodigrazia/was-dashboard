import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{
  path: '',
  component: ProductListComponent,
  children: [
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListRoutingModule { }

export const routedComponents = [
  ProductListComponent,
];
