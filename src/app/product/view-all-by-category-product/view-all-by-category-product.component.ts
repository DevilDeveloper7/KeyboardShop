import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-view-all-by-category-product',
  templateUrl: './view-all-by-category-product.component.html',
  styleUrls: ['./view-all-by-category-product.component.css']
})
export class ViewAllByCategoryProductComponent implements OnInit {
  category: any ;
  productList: any;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.category = data['id'];
      console.log(this.category)
      this.productService
        .viewProductByCategory(this.category)
        .subscribe(categoryData => {
          this.productList = categoryData
        })
    })

  }
}
