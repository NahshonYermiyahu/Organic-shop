import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CategoriesService, Category} from '../categories.service';
import {Product, ProductsService} from '../abstract-products-service';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  categories: Observable<Category[]>;
  product: Product;
  constructor(private productsService: ProductsService,
              private categoriesService: CategoriesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe( prod => this.product = prod);
  }
  update() {

    this.productsService.updateProduct(this.product)
      .then(() => this.router.navigate(['admin/products']));
  }
  cancel() {
    this.router.navigate(['admin/products']);
  }


}
