import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/Auth/auth.service';

@Component({
  selector: 'app-seller-component',
  templateUrl: './seller-component.component.html',
  styleUrls: ['./seller-component.component.scss']
})
export class SellerComponentComponent implements OnInit {

  regForm!: FormGroup;
  loginForm!: FormGroup;

  showLogin: boolean = true;

  reg_datas: any = [];
  err_msg: string = '';
  seller_status:number=0;

  constructor(
    private fb: FormBuilder,
    private authSer: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.regForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      phn: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#&$*^]).{1,}$'
          ),
        ],
      ],
    });

    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#&$*^]).{1,}$'
          ),
        ],
      ],
    });

    this.reg_datas = localStorage.getItem('registration_data_seller');


  }


  // Form Change
  openLogin() {
    this.showLogin = true;
  }

  openSignup() {
    this.showLogin = false;
  }

  //Form Data Submit
  submitData() {
    // console.log(this.regForm.value);
    this.authSer.sellerreg(this.regForm.value).subscribe((res)=>{
      if(res){
        this.authSer.sellerregdata().subscribe((data)=>{
          localStorage.setItem('registration_data_seller',JSON.stringify(data));
          this.showLogin=true;
        })
      }
    })
    
  }


  submitDataLogin() {
    // console.log(this.loginForm.value);
    JSON.parse(this.reg_datas).forEach((val:any)=>{
      // console.log('val=',val.email,val.password);
      if (
        this.loginForm.value.email == val.email &&
        this.loginForm.value.password == val.password
      ) {
        localStorage.setItem('sellerEmail',this.loginForm.value.email)
        localStorage.removeItem('userEmail')
        localStorage.removeItem('adminEmail')
        this.authSer.sellerlogin(this.loginForm.value).subscribe((response)=>{
          // console.log('login-res',response);
          if(response){
            // this.route.navigate(['home'])
            localStorage.setItem('seller',JSON.stringify(this.seller_status));
            localStorage.removeItem('admin');
            localStorage.removeItem('user');
            window.location.assign('home')
          }else{
            this.err_msg='Please give right credential';
          }
        })
      }

      
    })
    
  }





}
