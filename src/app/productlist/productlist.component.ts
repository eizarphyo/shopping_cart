import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  selectedProduct?: any = [];
  removedProduct?: any;
  removedProductId?: any;

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

    let length = this.selectedProduct.length;
    console.log("length of selected product array >>", length)

    this.selectedProduct[length] = product;
    this.products[index]['isClicked'] = true;

    console.log('product>>', this.products);
    // console.log('selected product>>', this.selectedProduct[length]);
    // console.log('selected product array >>', this.selectedProduct)

  }

  getSelectedProduct() {
    return this.selectedProduct;
  }

  removeNoti(event: any) {
    this.removedProduct = event.name;
    this.removedProductId = event.id;
    this.products[this.removedProductId - 1]['isClicked'] = false;

    // console.log("remove product event from productlist>>", event);
  }
}
