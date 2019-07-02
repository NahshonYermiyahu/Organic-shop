import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product, ProductsService} from '../../admin/abstract-products-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

}
