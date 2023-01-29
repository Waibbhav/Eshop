import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../guard/authguard.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { CartComponent } from './cart/cart.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductListComponent } from './prod-list/prod-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { ProfileComponent } from './profile/profile.component';
import { SubProdListComponent } from './sub-prod-list/sub-prod-list.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'prod-List/:id', component: ProductListComponent },
  { path: 'subProdList/:name', component: SubProdListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-prod/:pid', component: EditProductComponent },
  {
    path: 'address',
    component: AddressFormComponent,
    canActivate: [AuthguardGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthguardGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthguardGuard] },
  { path: 'profile', component: ProfileComponent},
  { path: 'prod-details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
