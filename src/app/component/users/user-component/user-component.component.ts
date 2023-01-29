import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/Auth/auth.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss'],
})
export class UserComponentComponent implements OnInit {
  regForm!: FormGroup;
  loginForm!: FormGroup;

  showLogin: boolean = true;
  reg_datas: any = [];
  err_msg: string = '';
  user_status:number=2;

  constructor(
    private fb: FormBuilder,
    private authSer: AuthService,
    private route: Router
  ) {}

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

    this.reg_datas = localStorage.getItem('registration_datas');
    // console.log('reg_datas:', this.reg_datas);
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
    this.authSer.userreg(this.regForm.value).subscribe((res) => {
      // console.log('reg_res:', res);
      if (res) {
        this.authSer.userregdata().subscribe((data) => {
          localStorage.setItem('registration_datas', JSON.stringify(data));
          this.showLogin = true;
        });
      }
    });
  }

  submitDataLogin() {
    // console.log(this.loginForm.value);
    JSON.parse(this.reg_datas).forEach((val: any) => {
      // console.log('val:', val.email, val.password);
      if (
        this.loginForm.value.email == val.email &&
        this.loginForm.value.password == val.password
      ) {
        localStorage.setItem('userEmail',this.loginForm.value.email)
        localStorage.removeItem('sellerEmail')
        localStorage.removeItem('adminEmail')
        this.authSer.userlogin(this.loginForm.value).subscribe((response) => {
          // console.log('login_res:', response);
          
          if (response) {
            // this.route.navigate(['home']);
            window.location.assign('/home')
            localStorage.setItem("user",JSON.stringify(this.user_status));
            localStorage.removeItem("seller");
            localStorage.removeItem("admin");
            // window.location.reload()
          }
        });
      } else {
        this.err_msg = 'Please give right credential';
      }
    });
  }
}
