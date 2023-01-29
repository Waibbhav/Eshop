import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product/product.service';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.scss'],
})
export class ProdlistComponent implements OnInit {
  
  
  allprodarr: any = [];

 

  user_status!: any;
  seller_status!: any;
  admin_status!: any;

  constructor(
    // private aroute: ActivatedRoute,
    private prodSer: ProductService,
    private route:Router
  ) {}

  ngOnInit(): void {
    
    


    this.prodSer.getprodcat().subscribe((res: any) => {
      this.allprodarr = res;
      console.log('all_prods:', this.allprodarr);
    });
    // this.aroute.paramMap.subscribe((param: any) => {
    //   this.c_id = param.get('id');
    //   console.log('category:', this.c_id);

    //   // this.subcatarr=this.allprodarr.filter((x:any)=>{
    //   //   x.category==this.c_id
    //   // })
    //   // console.log("res:",this.subcatarr);
      
    //   this.prodSer.getcategorizedproducts(this.c_id).subscribe((res:any)=>{
    //     this.subcatarr=res;      
    //     console.log("res:",this.subcatarr);  
    //   })
    // });
  }

  isuserlogin(){
    this.user_status = localStorage.getItem('user');
    return this.user_status;
  }

  issellerlogin(){
    this.seller_status = localStorage.getItem('seller');
   
    return this.seller_status;
  }

  isadminlogin(){
    this.admin_status = localStorage.getItem('admin');
    
    return this.admin_status;
  }

  


  logout() {
    localStorage.removeItem('admin');
    localStorage.removeItem('seller');
    localStorage.removeItem('user');
    window.location.assign('/home');
    
    
    
    
  }

  
}
