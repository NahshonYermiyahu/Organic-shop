import { Component, OnInit } from '@angular/core';
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
  menuItems: NavLink[] = [
    {path: 'user/orders', label: 'My Orders'},
    {path: 'admin/orders', label: 'Manage Orders'},
    {path: 'admin/products', label: 'Manage Products'},
    {path: 'logout', label: 'logout'}
  ] ;

  constructor() { }

  ngOnInit() {
  }

}
