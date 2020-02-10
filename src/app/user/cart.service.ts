import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class CartConfig {
  static readonly CART_ID = 'cartId';
  static readonly CART_COLLECTION = 'carts';
  static readonly CART_PRODUCTS = 'cart_products';
}

export interface Cart {
  timestamp: number;
}

export interface ProductCart {
  cartId: string;
  productId: string;
  quantity: number;
  productTitle: string;
  productPrice: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartId: string;
  constructor(private fireStore: AngularFirestore ) {
    if (!localStorage.getItem(CartConfig.CART_ID)) {
      const cart: Cart = { timestamp: new Date().getTime()};
      fireStore.collection<Cart>(CartConfig.CART_COLLECTION)
        .add(cart)
        .then(d => {
          this.cartId = d.id;
          localStorage.setItem(CartConfig.CART_ID, this.cartId);
        });
    } else {
      this.cartId = localStorage.getItem(CartConfig.CART_ID);
    }
  }

  createProductCart(productId: string,
                    productTitle: string, productPrice: string, imageUrl: string): Promise<void> {
    return this.updateProductCart( productId, productTitle, productPrice, imageUrl, 1);
  }

  updateProductCart( productId: string, productTitle: string, productPrice: string, imageUrl: string, quantity: number): Promise<void> {
    const id = this.cartId + productId;
    const productCart: ProductCart = {productTitle, productPrice, imageUrl, quantity, productId, cartId: this.cartId};
    return this.fireStore
      .collection<ProductCart>(CartConfig.CART_PRODUCTS)
      .doc(id)
      .set(productCart);
  }

  removeProductCart(productId: string): Promise<void> {
    const id = this.cartId + productId;
    return this.fireStore.collection(CartConfig.CART_PRODUCTS)
      .doc(id)
      .delete();
  }

  getProductCart(productId: string): Observable<ProductCart> {
    return this.fireStore
      .collection<ProductCart>(CartConfig.CART_PRODUCTS)
      .doc(this.cartId + productId)
      .get()
      .pipe(map(d => d.data() as ProductCart));
  }

  getCart(cartId ?: string): Observable<ProductCart[]> {
    if (!cartId) {
      return this.fireStore
        .collection<ProductCart>(CartConfig.CART_PRODUCTS)
        .valueChanges();
    }
    return this.fireStore
      .collection<ProductCart>(CartConfig.CART_PRODUCTS, ref => {
        return ref.where('cartId', '==', cartId);
      }).valueChanges();
  }
}
