import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  selectedProduct?: any = [];
  // hideCartProduct?: any = [];
  show: boolean = true;
  i = 0;
  isClicked?: boolean;
  removedProduct?: any;

  products = [
    {
      id: 1001,
      name: 'Android TV',
      brand: 'Samsung',
    },
    {
      id: 1002,
      name: 'Electric Lamp',
      brand: 'Midea',
    },
    {
      id: 1003,
      name: 'Refrigerator',
      brand: 'Toshiba'
    }
  ]

  onSelected(product: any, myindex: any) {



    this.selectedProduct[this.i] = product;
    this.i++;
    this.isClicked = true;
    console.log('product>>', product);
    console.log('selected product>>', this.selectedProduct[0]);
    console.log('selected product array >>', this.selectedProduct)

  }

  getSelectedProduct() {
    return this.selectedProduct;
  }


  // hideCart(product: any, index: number) {
  //   this.isClicked = true;
  //   this.hideCartProduct = product;
  // }

  // getHideEle() {
  //   return this.hideCartProduct;
  // }

  removeNoti(event: any) {
    console.log("remove product event from pl>>", event);
    this.removedProduct = event.name;
    (console.log("to be display", this.removedProduct));
  }
}
