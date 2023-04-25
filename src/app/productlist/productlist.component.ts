import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  selectedProduct?: any = [];
  // hideCartProduct?: any = [];
  i = 0;
  clicked?: boolean;
  removedProduct?: any;

  loading: boolean = true;

  products = [
    {
      id: 1,
      name: 'Android TV',
      brand: 'Samsung',
      isClicked: false
    },
    {
      id: 2,
      name: 'Electric Lamp',
      brand: 'Midea',
      isClicked: false
    },
    {
      id: 3,
      name: 'Refrigerator',
      brand: 'Toshiba',
      isClicked: false
    }
  ]

  onSelected(product: any, index: any) {

    this.selectedProduct[this.i] = product;
    this.i++;
    this.clicked = true;
    this.products[index]['isClicked'] = this.clicked;
    console.log('product>>', this.products);
    // console.log("isclicked after click>>", product['isClicked']);

    // console.log('selected product>>', this.selectedProduct[0]);
    // console.log('selected product array >>', this.selectedProduct)

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
