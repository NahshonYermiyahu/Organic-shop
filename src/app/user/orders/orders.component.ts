import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface Orders {
  orderId: string;
  orderDate: string;
  orderTotal: number;
}

const ORDER_DATA: Orders[] = [
  {orderId: '1q', orderDate: '11.12.12', orderTotal: 123},
  {orderId: '2q', orderDate: '12.12.12', orderTotal: 223},
  {orderId: '3q', orderDate: '13.12.12', orderTotal: 323},
  {orderId: '4q', orderDate: '14.12.12', orderTotal: 423},
  {orderId: '5q', orderDate: '15.12.12', orderTotal: 523},
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  dataSource = new MatTableDataSource<Orders>(ORDER_DATA);
  displayedColumns: string[] = ['orderId', 'orderDate', 'orderTotal', 'delete'];
  selection = new SelectionModel<Orders>(true, []);

  constructor() { }

  ngOnInit() {
  }

  delete(id: any) {
    
  }
}
