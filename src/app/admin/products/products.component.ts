import {Component, OnInit, ViewChild} from '@angular/core';
import {Product, ProductsService} from '../abstract-products-service';
import {CategoriesService} from '../categories.service';
import {Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

// @ts-ignore
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService,
              private categoriesService: CategoriesService,
              private router: Router) { }
  displayedColumns: string[] = ['title', 'price', 'category', 'edit', 'delete'];
  dataSource: MatTableDataSource<Product>;
filter: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(products => {
        this.dataSource = new MatTableDataSource<Product>(products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filter = this.filter;
      });
  }

  applyFilter(filterValue: string) {
    this.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filter;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(id: string) {
    this.router.navigate(['edit', id]);
  }
  delete(id: string) {
    this.productsService.deleteProduct(id);
  }
  addProduct() {
    this.router.navigate(['product/add']);
  }

}
