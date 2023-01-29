import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/users/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { PnfComponent } from './component/pnf/pnf.component';
import { ProdlistComponent } from './component/prodlist/prodlist.component';
import { SellerComponentComponent } from './component/users/seller-component/seller-component.component';
import { SubprodlistComponent } from './component/subprodlist/subprodlist.component';
import { UserComponentComponent } from './component/users/user-component/user-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponentComponent },
  { path: 'seller', component: SellerComponentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'prodlist', component: ProdlistComponent },
  { path: 'subprodlist/:name', component: SubprodlistComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },

  { path: '**', component: PnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
