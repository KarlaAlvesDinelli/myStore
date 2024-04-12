import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './products/shared/shared.module';
import { ProductsListModule } from './products/dashboard/products-list/products-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './products/auth/auth.module';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout/components/layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsListModule,
    AuthModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
