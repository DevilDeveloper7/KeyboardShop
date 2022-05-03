import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {ListOrderComponent} from "./order/list-order/list-order.component";


const routes: Routes = [
  {path: 'keyboards', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'order', component: ListOrderComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {
}
