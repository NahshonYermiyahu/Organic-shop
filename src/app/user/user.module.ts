import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [HomeComponent, OrdersComponent, ShoppingCartComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, OrdersComponent, ShoppingCartComponent]
})
export class UserModule { }
