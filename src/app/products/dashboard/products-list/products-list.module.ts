import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';

import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddeditProductComponent } from './components/addedit-product/addedit-product.component';

import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    AddeditProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
  ],
  exports: [AddeditProductComponent],
  providers: [MessageService, ConfirmationService],
})
export class ProductsListModule {}
