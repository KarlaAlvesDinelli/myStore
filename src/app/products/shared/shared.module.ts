import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from './filter.pipe';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [HeaderComponent, FilterPipe, SelectComponent],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    TableModule,
  ],
  exports: [HeaderComponent, SelectComponent, FilterPipe],
})
export class SharedModule {}
