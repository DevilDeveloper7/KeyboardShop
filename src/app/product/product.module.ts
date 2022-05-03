import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {ViewAllProductComponent} from './view-all-product/view-all-product.component';
import {ViewAllByDateProductComponent} from './view-all-by-date-product/view-all-by-date-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {ViewAllByCategoryProductComponent} from './view-all-by-category-product/view-all-by-category-product.component';
import {SiteLayoutModule} from "../site-layout/site-layout.module";


@NgModule({
  declarations: [
    ProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductComponent,
    ViewAllByDateProductComponent,
    CreateProductComponent,
    ViewProductComponent,
    ViewAllByCategoryProductComponent
  ],
  exports: [
    ProductComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SiteLayoutModule
    ]
})
export class ProductModule {
}
