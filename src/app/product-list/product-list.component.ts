import { Component } from '@angular/core';
import {products} from "../products";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  show: boolean = true;

  constructor(private route: Router) {

  }
  // products=[{
  //   id:1,
  //   name:"Apple XL",
  //   description:"qwertyuiop"
  // },
  // {
  //   id:2,
  //   name:"Apple Mini",
  //   description:"asdfghjkl"
  // }];
  products=[...products];
  share(){
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  // redirectTo(productId: number) {
  //   this.route.navigate(['products/'+productId]);
  //   console.log(productId)
  // }
}
