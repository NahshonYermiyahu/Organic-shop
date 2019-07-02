import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product, ProductsService,} from '../../admin/abstract-products-service';
import {CategoriesService, Category} from '../../admin/categories.service';
import {MatSelectionListChange} from '@angular/material';
import {BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;
  cols = 2;
  rowHeight = '4:7';
  categories$: Observable<Category[]>;

  constructor(private productService: ProductsService,
              private categoriesService: CategoriesService,
              private breakPoints: BreakpointObserver) {
    if (window.innerWidth > 500) {
      this.loadDesktopContent();
    } else {
      this.loadMobileContent();
    }
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    this.categories$ = this.categoriesService.getCategories();
    this.breakPoints.observe('(min-width: 500px)')
      .subscribe(state => {
        if (state.matches) {
          this.loadDesktopContent();
        } else {
          this.loadMobileContent();
        }
      });
  }


  selection(change: MatSelectionListChange) {
    const selected = change.option.selected;
    change.source.deselectAll();
    change.option.selected = selected;
    this.products$ = this.productService
      .getProducts(!selected ? '' : change.option.value as string);
  }

  private loadDesktopContent() {
    this.cols = 4;
    this.rowHeight = '5:10';
  }

  private loadMobileContent() {
    this.cols = 2;
    this.rowHeight = '1:2';
  }
}
