import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/Service/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  addressForm!:FormGroup
  constructor(private cartser:CartService,
    private fb:FormBuilder) {
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
    this.cartser.getProducts()
    .subscribe((res :any)=>{
      this.products = res;
      // console.log(this.products);
      
      this.grandTotal = this.cartser.getTotalPrice();
    })
    console.log("cart comp",this.products);
    console.log("totalprice in cart component",this.grandTotal);
    
  }
  submitData(){
    console.log("formvalue:",this.addressForm.value);
    
  }

  removeItem(item: any){
    this.cartser.removeCartItem(item);
  }
  emptycart(){
    this.cartser.removeAllCart();
  }
}
