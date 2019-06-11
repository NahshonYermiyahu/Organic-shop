import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { OshopNavComponent } from './oshop-nav/oshop-nav.component';
import {UserModule} from '../user/user.module';
import {AdminModule} from '../admin/admin.module';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent as AdminOrders} from '../admin/orders/orders.component';
import {OrdersComponent} from '../user/orders/orders.component';
import {ProductsComponent} from '../admin/products/products.component';
import {HomeComponent} from '../user/home/home.component';
import {ShoppingCartComponent} from '../user/shopping-cart/shopping-cart.component';
const routes: Routes = [
  {path: 'admin/orders', component: AdminOrders},
  {path: 'admin/products', component: ProductsComponent},
  {path: 'user/orders', component: OrdersComponent},
  {path: 'user/home', component: HomeComponent},
  {path: 'user/shopping-cart', component: ShoppingCartComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'oshop-nav', component: OshopNavComponent}
];
@NgModule({

  declarations: [LogoutComponent, OshopNavComponent],
  imports: [
    CommonModule,
    UserModule,
    AdminModule,
    RouterModule.forRoot(routes)
  ],
  exports: [OshopNavComponent]
})
export class SharedModule { }
