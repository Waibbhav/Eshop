import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allprodarr: any = [];

contactform!: FormGroup;

constructor(private prodSer: ProductService, private fb: FormBuilder) {
  this.contactform = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phn: ['', Validators.required],
    msg: [''],
  });
}

ngOnInit(): void {
  this.prodSer.getprodcat().subscribe((res: any) => {
    this.allprodarr = res;
    // console.log('all_prods:', this.allprodarr);
  });
}

submit() {
  console.log('form_data:', this.contactform.value);
  alert('Form submitted successfully');
}

}
