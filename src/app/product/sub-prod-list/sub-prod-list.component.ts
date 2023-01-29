import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product/product.service';
import { NgModel } from '@angular/forms';
import { SortPipe } from '../pipe/sort.pipe';

@Component({
  selector: 'app-sub-prod-list',
  templateUrl: './sub-prod-list.component.html',
  styleUrls: ['./sub-prod-list.component.scss']
})
export class SubProdListComponent implements OnInit {

  public dropdownArr: any[] = ['High to low', 'Low to high'];

  allprodarr: any = [];
  subcat_name: any;
  getprodarr: any;
  seller_status!: any;
  admin_status!: any;
  SearchText: string ='';

  order:any="";

  constructor(
    private aroute: ActivatedRoute,
    private prodSer: ProductService
  ) {   }

  ngOnInit(): void {
    this.seller_status = localStorage.getItem('seller');
    console.log('seller_status', this.seller_status);

    this.admin_status = localStorage.getItem('admin');
    console.log('admin_status', this.admin_status);

    this.prodSer.getallprod().subscribe((res) => {
      this.allprodarr = res;
      console.log('all products:', this.allprodarr);
    });
    this.aroute.paramMap.subscribe((param) => {
      this.subcat_name = param.get('name');
      console.log('subcat:', this.subcat_name);
      setTimeout(() => {
        this.getprodarr = this.allprodarr.filter(
          (x: any) => x.subcategory == this.subcat_name
        );
        console.log('get_prod:', this.getprodarr);
      }, 500);
    });

  }

  removeprod(id: number) {
    console.log('index', id);
    this.prodSer.deleterod(id).subscribe((res) => {
      console.log('del res', res);
      window.location.reload()
    });
  }

  //search-bar
  onSearchTextEntered(searchedValue:string){
    this.SearchText=searchedValue;
    // console.log(this.SearchText);
    
  }


  //sort-item
  sortItem(eve: any) {
    if (eve.target.outerText == 'High to low') {
      this.getprodarr.sort(function (a: any, b: any) {
        return b.price > a.price ? 1 : a.price > b.price ? -1 : 0;
      });
    } else if (eve.target.outerText == 'Low to high') {
      this.getprodarr.sort(function (a: any, b: any) {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
    }
    console.log('sort=', this.getprodarr);
    // this.f_arr=this.getprodarr
  }

}
