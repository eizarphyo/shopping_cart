import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {
  // @Input() productList: any = [];
  @Input() selectedProduct?: any;
  @Output() notifyRemove = new EventEmitter;

  removedProduct?: any;

  removeProduct(product: any, index: number) {
    this.notifyRemove.emit(product);
    let deleted = this.selectedProduct.splice(index, 1);
    console.log("removed product>>", deleted);
    console.log("selected product array>>", this.selectedProduct);
  }
}
