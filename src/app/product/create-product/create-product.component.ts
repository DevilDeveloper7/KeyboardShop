import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productService.createProduct()
  }
  createProduct(form: any){
    console.log(form.value)
  }

}
