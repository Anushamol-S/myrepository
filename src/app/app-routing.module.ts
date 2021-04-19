import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProuctDetailsComponent } from './prouct-details/prouct-details.component';

const routes: Routes = [
  { path :'',
    component : ProductListingComponent},
    { path :'product/:id',
    component : ProuctDetailsComponent},
    { path :'Addproduct',
    component : AddProductComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
 