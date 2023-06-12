import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product,products } from '../products';
import { __values } from 'tslib';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product|undefined;
  constructor(private route:ActivatedRoute, private router: Router){
    // this.route.params.subscribe(ele => {
    //   this.initializeProduct();
    // })
  }
  
   ngOnInit():void{
    this.initializeProduct();
  }

  initializeProduct() {
    const routes=this.route.snapshot.params;
    const productIdFromRoute=Number(routes['productId'])
  // console.log(routes['productId']);
  // const routeParams = this.route.snapshot.paramMap;
  // const productIdFromRoute = Number(routeParams.get('productId'));
  // const productIdFromRoute =this.route.params.value('productId');
  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

  redirectTo() {
    this.router.navigate(['']);
  }
}
