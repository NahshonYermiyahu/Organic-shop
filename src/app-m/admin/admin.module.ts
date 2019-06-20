import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

import {ProductsFirebaseService} from './products-firebase.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './abstract-products-service';

@NgModule({
  declarations: [OrdersComponent, ProductsComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  exports: [OrdersComponent, ProductsComponent],
  providers: [{
    provide: ProductsService, useClass: ProductsFirebaseService
  }]
})
export class AdminModule { }
