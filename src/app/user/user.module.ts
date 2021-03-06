import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule, MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LengthLimitPipe } from './length-limit.pipe';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ProductCartComponent } from './product-cart/product-cart.component';

@NgModule({
  declarations:
    [HomeComponent, ShoppingCartComponent, OrdersComponent, LengthLimitPipe, ProductCartComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [HomeComponent, ShoppingCartComponent, OrdersComponent]
})
export class UserModule { }
