import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  all_products: any;

  constructor(private prodSer: ProductService) { }

  ngOnInit(): void {
    this.prodSer.getprodcat().subscribe((res: any) => {
      console.log('all_prods:', res);
      this.all_products = res;
    });
  }

}
