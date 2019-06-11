import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [OrdersComponent, ProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [OrdersComponent, ProductsComponent]
})
export class AdminModule { }
