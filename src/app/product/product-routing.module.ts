import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UpdateProductComponent} from "./update-product/update-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import {ViewAllProductComponent} from "./view-all-product/view-all-product.component";
import {ViewAllByDateProductComponent} from "./view-all-by-date-product/view-all-by-date-product.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {ViewAllByCategoryProductComponent} from "./view-all-by-category-product/view-all-by-category-product.component";
import {ViewProductComponent} from "./view-product/view-product.component";

const routes: Routes = [
  {path: '', component: ViewAllProductComponent},
  {path: 'create', component: CreateProductComponent},
  {path: 'update/:id', component: UpdateProductComponent},
  {path: 'delete', component: DeleteProductComponent},
  {path: 'getAllByDate', component: ViewAllByDateProductComponent},
  {path: 'getAllByCategory/:id', component: ViewAllByCategoryProductComponent},
  {path: 'view-product/:id', component: ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
