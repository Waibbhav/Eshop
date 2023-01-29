import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/Auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: any=[];

  userdata:any=[];
  sellerdata:any=[];

  profile!:any;
  listName!:any;

  userListShow=false;
  sellerListShow=false;



  admin_status!: any;

  constructor(private authSer: AuthService) {}

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      // User
      this.profile='User'
      this.authSer.userregdata().subscribe((data: any) => {
        // console.log(data);
        this.userProfile = data.filter((value: any) => {
          return value.email == localStorage.getItem('userEmail');
        });
        // console.log(this.userProfile[0]);
      });

    }else if(localStorage.getItem('seller')){
      // Seller
      this.profile='Seller'
      this.authSer.sellerregdata().subscribe((data: any) => {
        // console.log(data);
        this.userProfile = data.filter((value: any) => {
          return value.email == localStorage.getItem('sellerEmail');
        });
        // console.log(this.userProfile[0]);
      });
    }else{
      // Admin
      this.profile='Admin';
      this.authSer.userregdata().subscribe((data: any) => {
        this.userdata=data;
        console.log('user:',this.userdata);
        
      })
      this.authSer.sellerregdata().subscribe((data: any) => {
        console.log('seller:',data);
        
        this.sellerdata=data;
        // console.log('seller:',this.sellerdata);
        
      })
 

      this.authSer.adminregdata().subscribe((data: any) => {
        // console.log(data);
        this.userProfile = data.filter((value: any) => {
          return value.email == localStorage.getItem('adminEmail');
        });
        // console.log(this.userProfile[0]);
      });

    }
    
  }

  isadminlogin() {
    this.admin_status = localStorage.getItem('admin');

    return this.admin_status;
  }

  openuserlist(){
    this.listName='User';
    this.userListShow=true;
    this.sellerListShow=false;

  }
  opensellerlist(){
    this.listName='Seller';
    this.sellerListShow=true;
    this.userListShow=false;

  }

  closelist(){
    this.sellerListShow=false;
    this.userListShow=false;
  }
}
