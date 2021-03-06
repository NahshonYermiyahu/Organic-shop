
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth-service';
interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-oshop-nav',
  templateUrl: './oshop-nav.component.html',
  styleUrls: ['./oshop-nav.component.css']
})

export class OshopNavComponent implements OnInit {

  navLinks: NavLink[] = [
    {path: 'home', label: 'O'},
    {path: 'shopping-cart', label: 'shopping-cart'}
  ];

  loginLink: NavLink = {path: 'login', label: 'Login'};

   menuItems: NavLink[] = [
     {path: 'user/orders', label: 'My Orders'},
     {path: 'logout', label: 'logout'}
   ];

  adminMenuAdmin: NavLink[] = [
    {path: 'admin/orders', label: 'Manage Orders'},
    {path: 'admin/products', label: 'Manage Products'}
  ] ;

  constructor(private authService: AuthService) {}


  isAuth(): boolean {
    return this.authService.isAuth();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  getUserName() {
    if (!this.isAuth()) {
      return 'anonymous';
    }
    return this.authService.getUser().displayName;
  }

  ngOnInit() {
  }


}
