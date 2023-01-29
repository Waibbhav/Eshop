import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { ProductService } from 'src/app/Service/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  pid: any;
  prodArr: any;
  addressForm!:FormGroup

  constructor(
    private aroute: ActivatedRoute,
    private prodSer: ProductService,
    private cartser:CartService,
    private fb:FormBuilder
  ) {
    this.addressForm=this.fb.group({
      name:['',Validators.required],
      phn:['',Validators.required],
      pin:['',Validators.required],
      state:['',Validators.required],
      house:['',Validators.required],
      road:['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.aroute.paramMap.subscribe((param) => {
      this.pid = param.get('id');
      console.log('pid', this.pid);
      this.prodSer.getsingleprod(this.pid).subscribe((res) => {
        this.prodArr = res;
        console.log('prodarr:', this.prodArr);
      });
    });
  }

  submitData(){
    console.log("formvalue:",this.addressForm.value);
    localStorage.setItem('address',JSON.stringify(this.addressForm.value))
    
  }


  addcart(item:any){
    this.cartser.addtoCart(item);
  }

  GotoPayment(){
    window.location.assign('/product/payment')
  }

}
