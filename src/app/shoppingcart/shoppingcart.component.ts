import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {
  // @Input() productList: any = [];
  @Input() selectedProduct?: any;
  @Output() notifyEvt = new EventEmitter;
  removedProduct?: any;

  removeProduct(product: any, index: number) {
    this.notifyEvt.emit(product);
    this.removedProduct = this.selectedProduct.splice(index, 1);

    console.log("removed product>>", this.removedProduct);
    console.log("in the array>>", this.selectedProduct);
  }
}
