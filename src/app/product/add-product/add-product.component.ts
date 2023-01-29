import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProdForm!: FormGroup;
  catArr: any = [
    'Electronics',
    'Clothing',
    'Grocery',
    'Footwear',
    'Beauty Products',
    'Furnitures',
  ];
  subcatArr: any = [
    'Mobile',
    'Laptop',
    'Watch',
    'Menwear',
    'Ladieswear',
    'Kidswear',
    'Package_Foods',
    'Snacks_Beverages',
    'Household_Care',
    'Menfootwear',
    'Ladiesfootwear',
    'Kidsfootwear',
    'Makeup',
    'Hair_Care',
    'Skin_Care',
    'Kitchen_Storage',
    'Living_Room_Furniture',
    'Home_Accessories',
  ];

  constructor(
    private fb: FormBuilder,
    private prodSer: ProductService,
    private route: Router
  ) {
    this.addProdForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitData() {
    console.log('formdata:', this.addProdForm.value);
    this.prodSer.addprod(this.addProdForm.value).subscribe((res: any) => {
      console.log('add res', res);

      if (res) {
        this.route.navigate(['/product/subProdList/', res.subcategory]);
      }
    });
  }
}
