import {Component, OnInit, ViewChild} from '@angular/core';
import {Product, ProductsService} from '../abstract-products-service';
import {CategoriesService} from '../categories.service';
import {Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filter: string;
  displayedColumns: string[] = ['title', 'price', 'category', 'edit', 'delete'];
  dataSource: MatTableDataSource<Product>;

  constructor(private productsService: ProductsService,
              private categoriesService: CategoriesService,
              private router: Router) { }

  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe(products => {
      this.dataSource = new MatTableDataSource<Product>(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter = this.filter;
      this.dataSource.sort = this.sort;
    });
  }

  addProduct() {
    this.router.navigate(['product/add']);
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
}
