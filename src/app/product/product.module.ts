import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './prod-list/prod-list.component';
import { SubProdListComponent } from './sub-prod-list/sub-prod-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { SearchBarComponentComponent } from './search-bar-component/search-bar-component.component';
import { SearchPipe } from './pipe/search.pipe';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { SortPipe } from './pipe/sort.pipe';


@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent,
        SubProdListComponent,
        AddProductComponent,
        EditProductComponent,
        AddressFormComponent,
        ProductDetailsComponent,
        CartComponent,
        SearchBarComponentComponent,
        SearchPipe,
        ProfileComponent,
        PaymentComponent,
        SortPipe,

    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        
    ]
})
export class ProductModule { }
