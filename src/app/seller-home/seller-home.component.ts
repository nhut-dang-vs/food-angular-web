import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from './../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss'],
})
export class SellerHomeComponent implements OnInit {
  productList: product[] | undefined;
  constructor(private product: ProductService) {}

  ngOnInit() {
    this.product.productList().subscribe((result) => {
      console.log(result);
      this.productList = result;
    });
  }
}
