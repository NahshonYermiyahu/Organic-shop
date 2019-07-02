import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService, Category} from '../categories.service';
import {Product, ProductsService} from '../abstract-products-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  categories: Observable<Category[]>;

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

  cancel() {
    this.router.navigate(['admin/products']);
  }

  update() {
    this.productsService.updateProduct(this.product)
      .then(() => this.router
        .navigate(['admin/products']));
  }
}
