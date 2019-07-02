import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {Product, ProductsService} from '../abstract-products-service';
import {CategoriesService, Category} from '../categories.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categories: Observable<Category[]>;
  product: Product = {
    price: 0, title: '', category: '',
    imageUrl: '', id: ''};

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

  save() {
    this.product.id = '' + _.random(10000, 99999);
    this.productsService.addProduct(this.product)
      .then(() => this.router.navigate(['admin/products']));
  }

  cancel() {
    this.router.navigate(['admin/products']);

  }
}
