import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/Auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  regForm!: FormGroup;
  loginForm!: FormGroup;

  showLogin: boolean = true;

  reg_datas: any = [];
  err_msg: string = '';

  admin_status: number = 1;

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

    // this.authSer.adminregdata().subscribe((data) => {
    //   localStorage.setItem('registration_data_admin', JSON.stringify(data));
    //   // this.showLogin = true;
    // });

    this.reg_datas = localStorage.getItem('registration_data_admin');
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
    this.authSer.adminreg(this.regForm.value).subscribe((res) => {
      if (res) {
        this.authSer.adminregdata().subscribe((data) => {
          localStorage.setItem('registration_data_admin', JSON.stringify(data));
          this.showLogin = true;
        });
        // this.showLogin = true;
      }
    });
  }

  submitDataLogin() {
    // console.log(this.loginForm.value);
    JSON.parse(this.reg_datas).forEach((val: any) => {
      if (
        this.loginForm.value.email == val.email &&
        this.loginForm.value.password == val.password
      ) {
        localStorage.setItem('adminEmail',this.loginForm.value.email)
        localStorage.removeItem('userEmail')
        localStorage.removeItem('sellerEmail')
        this.authSer.adminlogin(this.loginForm.value).subscribe((response) => {
          if (response) {
            this.route.navigate(['/home']);
            localStorage.setItem('admin', JSON.stringify(this.admin_status));
            localStorage.removeItem('seller');
            localStorage.removeItem('user');
            window.location.reload()
          } else {
            this.err_msg = 'Please give right credential';
          }
        });
      }
    });
  }
}
