import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product/product.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProductListComponent implements OnInit {
  c_id: any;
  allprodarr: any = [];
  subcatarr: any;

  constructor(
    private aroute: ActivatedRoute,
    private prodSer: ProductService
  ) { }

  ngOnInit(): void {
    this.prodSer.getprodcat().subscribe((res: any) => {
      this.allprodarr = res;
      console.log('all_prods:', this.allprodarr);
    });
    this.aroute.paramMap.subscribe((param: any) => {
      this.c_id = param.get('id');
      console.log('category:', this.c_id);

      // this.subcatarr=this.allprodarr.filter((x:any)=>{
      //   x.category==this.c_id
      // })
      // console.log("res:",this.subcatarr);
      
      this.prodSer.getcategorizedproducts(this.c_id).subscribe((res:any)=>{
        this.subcatarr=res;      
        console.log("res:",this.subcatarr);  
      })
    });
  }

}
