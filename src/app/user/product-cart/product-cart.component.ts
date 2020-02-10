import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input() productId: string;
  @Input() productTitle: string;
  @Input() productPrice: string;
  @Input() imageUrl: string;
  quantity = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService
      .getProductCart(this.productId)
      .subscribe(p => this.quantity = p ? p.quantity : 0);
  }

  subtractQuantity() {
    if (this.quantity === 1) {
      this.cartService
        .removeProductCart(this.productId)
        .then(() => this.quantity = 0);
    } else {
      this.cartService
        .updateProductCart(this.productId, this.productTitle, this.productPrice, this.imageUrl, this.quantity - 1 )
        .then(() => -- this.quantity);
    }
  }

  addQuantity() {
    this.cartService
      .updateProductCart(this.productId, this.productTitle, this.productPrice, this.imageUrl, this.quantity + 1 )
      .then(() => ++ this.quantity);
  }

  addProduct() {
    this.cartService
      .createProductCart(
        this.productId,
        this.productTitle,
        this.productPrice,
        this.imageUrl)
      .then(() => this.quantity = 1);
  }
}
