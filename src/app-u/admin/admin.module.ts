import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import {ProductsService} from './abstract-products-service';
import {ProductsFirebaseService} from './products-firebase.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
const routes: Routes = [
  {path: 'edit/:id', component: ProductEditComponent},
  {path: 'product/add', component: ProductAddComponent}
]
@NgModule({
  declarations: [OrdersComponent, ProductsComponent, ProductAddComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [OrdersComponent, ProductsComponent],
  providers: [
    {provide: ProductsService, useClass: ProductsFirebaseService}
  ]
})
export class AdminModule { }
