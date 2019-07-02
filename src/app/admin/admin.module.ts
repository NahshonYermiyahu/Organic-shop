import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import {ProductsFirebaseService} from './products-firebase.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './abstract-products-service';
import {
  MatButtonModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatPaginatorModule, MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {FormsModule} from '@angular/forms';
const routes: Routes = [
  {path: 'product/add', component: ProductAddComponent},
  {path: 'edit/:id', component: ProductEditComponent}
];

@NgModule({
  declarations: [OrdersComponent, ProductsComponent, ProductAddComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [OrdersComponent, ProductsComponent],
  providers: [{
    provide: ProductsService, useClass: ProductsFirebaseService
  }]
})
export class AdminModule { }
