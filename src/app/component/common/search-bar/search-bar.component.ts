import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { ProductService } from 'src/app/Service/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  filterstring: string = '';
  products :any=[];
  constructor(private prodser:ProductService , private router:Router) {}
  onchange(e:any){
    this.router.navigate(['/product/prod-details/', e.target.value]);
  }

  ngOnInit(): void {
    this.prodser.getallprod().subscribe(res =>{
      this.products= res
      // console.log(this.products);
    })
  }

  @Output()
  searchtextchange: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChange(){
    this.searchtextchange.emit(this.filterstring)
  }
  drop(){
    return this.filterstring
  }
}
