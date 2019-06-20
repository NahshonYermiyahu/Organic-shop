import { Injectable } from '@angular/core';
import {Product, ProductsService} from './abstract-products-service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';
const PRODUCTS = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductsFirebaseService implements ProductsService {

  constructor(private httpClient: HttpClient,
              private fireStore: AngularFirestore) {
    fireStore
      .collection<Product>(PRODUCTS)
      .valueChanges()
      .subscribe(data => {
        if (!data || data.length === 0) {
          this.createProducts();
        }
      });
  }

  addProduct(product: Product): Promise<void> {
    return undefined;
  }

  deleteProduct(id: string): Promise<void> {
    return undefined;
  }

  getProduct(id: string): Observable<Product> {
    return undefined;
  }

  getProducts(): Observable<Product[]> {
    return undefined;
  }

  updateProduct(product: Product): Promise<void> {
    return undefined;
  }

  private createProducts() {
    this.httpClient
      .get<Product[]>('assets/products.json')
      .subscribe(data => {
      data.forEach((product, index) => {
        product.id = '' + (index + 1);
        this.addUpdate(product);
      });
    });
  }

  private addUpdate(product: Product) {
    this.fireStore
      .collection<Product>(PRODUCTS)
      .doc(product.id)
      .set(product);
  }
}
