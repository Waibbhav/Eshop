import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './Service/Auth/auth.service';
import { ProductService } from './Service/product/product.service';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './component/users/user-component/user-component.component';
import { SellerComponentComponent } from './component/users/seller-component/seller-component.component';
import { HeaderComponentComponent } from './component/common/header-component/header-component.component';
import { FooterComponentComponent } from './component/common/footer-component/footer-component.component';
import { PnfComponent } from './component/pnf/pnf.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/users/admin/admin.component';
import { ProdlistComponent } from './component/prodlist/prodlist.component';
import { SubprodlistComponent } from './component/subprodlist/subprodlist.component';
import { SearchBarComponent } from './component/common/search-bar/search-bar.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { CartService } from './Service/Cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    SellerComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    PnfComponent,
    HomeComponent,
    AdminComponent,
    ProdlistComponent,
    SubprodlistComponent,
    SearchBarComponent,
    SearchFilterPipe,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, ProductService,CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
