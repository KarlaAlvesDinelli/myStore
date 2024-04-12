import { ProductDetailsComponent } from './products-list/components/product-details/product-details.component';
import { AddeditProductComponent } from './products-list/components/addedit-product/addedit-product.component';
import { AllProductsComponent } from './products-list/components/all-products/all-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'products', component: AllProductsComponent },
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'addproduct', component: AddeditProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
