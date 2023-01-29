import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  addressForm!:FormGroup;
  address:any=[];
  // address1:any={};

  constructor(private fb:FormBuilder) {
  //   this.addressForm=this.fb.group({
  //     name:['',Validators.required],
  //     phn:['',Validators.required],
  //     pin:['',Validators.required],
  //     state:['',Validators.required],
  //     house:['',Validators.required],
  //     road:['',Validators.required],
  //   })
   }

  ngOnInit(): void {
    // this.addressForm= new FormGroup({
    //   name:new FormControl(),
    //   phn:new FormControl(),
    //   pin:new FormControl(),
    //   state:new FormControl(),
    //   house:new FormControl(),
    //   road:new FormControl(),

    // })
   

  }
  
  submitData(){
    // console.log("formvalue:",this.addressForm.value);
    
    
  }
}
  

