import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminlogin, adminreg, sellerlogin, sellerreg, Userlogin, Userreg } from 'src/app/Class/Auth/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user_login_api = 'http://localhost:3000/user_login';
  user_reg_api = 'http://localhost:3000/user_reg';
  seller_login_api = 'http://localhost:3000/seller_login';
  seller_reg_api = 'http://localhost:3000/seller_reg';
  admin_login_api = 'http://localhost:3000/admin_login';
  admin_reg_api = 'http://localhost:3000/admin_reg';

  constructor(private http: HttpClient) {}
  // user section
  userlogin(formdata: any): Observable<Userlogin[]> {
    return this.http.post<Userlogin[]>(this.user_login_api, formdata);
  }

  userreg(formvalue: any): Observable<Userreg[]> {
    return this.http.post<Userreg[]>(this.user_reg_api, formvalue);
  }

  userregdata(): Observable<Userreg[]> {
    return this.http.get<Userreg[]>(this.user_reg_api);
  }

  // seller section
  sellerlogin(formvalue: any): Observable<sellerlogin[]> {
    return this.http.post<sellerlogin[]>(this.seller_login_api, formvalue);
  }


  sellerreg(formvalue: any): Observable<sellerreg[]> {
    return this.http.post<sellerreg[]>(this.seller_reg_api, formvalue);
  }

  sellerregdata(): Observable<sellerreg[]> {
    return this.http.get<sellerreg[]>(this.seller_reg_api);
  }

  // admin section
  adminlogin(formvalue: any):Observable<adminlogin[]>
  {
  return this.http.post<adminlogin[]>(this.admin_login_api,formvalue)
  }


  adminreg(formvalue: any):Observable<adminreg[]>
  {
    return this.http.post<adminreg[]>(this.admin_reg_api,formvalue)
  }

  adminregdata():Observable<adminreg[]>
  {
    return this.http.get<adminreg[]>(this.admin_reg_api)
  }
}
