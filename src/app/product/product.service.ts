import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";
import {Category} from "../site-layout/category";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  createProduct(productBody: Observable<Product>) {
    const baseUrl = 'http://localhost:3000/keyboards';
    return this.httpClient.post(baseUrl, productBody);
  }

  updateProduct(productId: Observable<Product>, productBody: Observable<Product>) {
    const baseUrl = 'http://localhost:3000/keyboards/' + productId;
    return this.httpClient.put(baseUrl, productBody);
  }

  viewAllProducts(): Observable<Product> {
    const baseUrl = 'http://localhost:3000/keyboards'
    return this.httpClient.get<Product>(baseUrl);
  }

  viewProduct(productId: string) {
    const baseUrl = 'http://localhost:3000/keyboards/' + productId;
    return this.httpClient.get(baseUrl);
  }

  viewProductByCategory(categoryId: number) {
    const baseUrl = 'http://localhost:3000/keyboards?category=' + categoryId;
    return this.httpClient.get(baseUrl);
  }

  viewProductByDate(date: Observable<Product>) {
    const baseUrl = 'http://localhost:3000/keyboards/' + date;
    return this.httpClient.get(baseUrl);
  }

  deleteProduct(productId: Observable<Product>) {
    const baseUrl = 'http://localhost:3000/keyboards/' + productId;
    return this.httpClient.delete(baseUrl);
  }

  getCategory(): Observable<Category> {
    const baseUrl = 'http://localhost:3000/categories'
    return this.httpClient.get<Category>(baseUrl);
  }
}
