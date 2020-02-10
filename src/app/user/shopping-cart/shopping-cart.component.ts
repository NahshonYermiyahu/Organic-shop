import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {CartService, ProductCart} from '../cart.service';
import {SelectionModel} from '@angular/cdk/collections';
import {ProductsService} from '../../admin/abstract-products-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  title: string;
  dataSource: MatTableDataSource<ProductCart>;
  displayedColumns: string[] = ['select', 'title', 'price', 'quantity', 'delete', 'imageUrl'];
  selection = new SelectionModel<ProductCart>(true, []);

  constructor(private cartService: CartService,
              private productsService: ProductsService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.dataSource = new MatTableDataSource<ProductCart>(cart);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row ?: ProductCart): string {
    if (! row) {
      return  ` $ {this.isAllSelected ()? 'select': ' deselect '} all` ;
    }
    return  ` $ {this.selection.isSelected (row)? 'deselect': 'select'} row $ {row.position + 1} ` ;
  }

  delete(id: any) {
  }
}
