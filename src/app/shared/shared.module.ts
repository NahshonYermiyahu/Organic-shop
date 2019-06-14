import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OshopNavComponent } from './oshop-nav/oshop-nav.component';
import { LogoutComponent } from './logout/logout.component';
import {UserModule} from '../user/user.module';
import {AdminModule} from '../admin/admin.module';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent as AdminOrders} from '../admin/orders/orders.component';
import {OrdersComponent} from '../user/orders/orders.component';
import {ProductsComponent} from '../admin/products/products.component';
import {HomeComponent} from '../user/home/home.component';
import {ShoppingCartComponent} from '../user/shopping-cart/shopping-cart.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatTabsModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {AngularFireModule} from '@angular/fire';
const routes: Routes = [
  {path: 'admin/orders', component: AdminOrders},
  {path: 'user/orders', component: OrdersComponent},
  {path: 'admin/products', component: ProductsComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]
@NgModule({
  declarations: [OshopNavComponent, LogoutComponent, LoginComponent],
  imports: [
    CommonModule,
    UserModule,
    AdminModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    AngularFireModule

  ],
  exports: [OshopNavComponent]
})
export class SharedModule { }
