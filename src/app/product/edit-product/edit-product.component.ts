import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product/product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  isDisable: boolean = false;
  
  editProdForm!: FormGroup;
  catArr: any = ['Electronics', 'Clothing', 'Grocery'];
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
  ];
  pid: any;
  singleprod: any = {};

  constructor(
    private prodSer: ProductService,
    private route: Router,
    private aroute: ActivatedRoute
  ) {
    this.isDisable = true;
  }

  ngOnInit(): void {
    this.isDisable = true;

    this.aroute.paramMap.subscribe((param) => {
      this.pid = param.get('pid');
      console.log('pid', this.pid);

      this.prodSer.getsingleprod(this.pid).subscribe((res) => {
        this.singleprod = res;
        console.log('single prod', this.singleprod);

        this.editProdForm = new FormGroup({
          name: new FormControl(this.singleprod.name),
          price: new FormControl(this.singleprod.price, Validators.required),
          description: new FormControl(
            this.singleprod.description,
            Validators.required
          ),
          category: new FormControl(this.singleprod.category),
          subcategory: new FormControl(this.singleprod.subcategory),
          image: new FormControl(this.singleprod.image),
        });
      });
    });
  }

  submitData() {
    console.log('formdata:', this.editProdForm.value);
    this.prodSer
      .editprod(this.pid, this.editProdForm.value)
      .subscribe((res: any) => {
        console.log('edit res', res);

        if (res) {
          this.route.navigate(['/product/subProdList/', res.subcategory]);
        }
      });
  }
}
