import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category, Product } from 'src/app/Class/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  category_url = 'http://localhost:3004/all_categories';
  prod_url = 'http://localhost:3004/all_products';

  constructor(private http: HttpClient) {}

  // Get all category list
  getprodcat(): Observable<category[]> {
    return this.http.get<category[]>(this.category_url);
  }

  // Get product categorize
  getcategorizedproducts(id: any): Observable<category[]> {
    return this.http.get<category[]>(`${this.category_url}/${id}`);
  }

  // Get all productlist
  getallprod(): Observable<Product[]> {
    return this.http.get<Product[]>(this.prod_url);
  }
  // Add products
  addprod(formdata: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.prod_url, formdata);
  }

  // Edit products
  editprod(id: any, formdata: any): Observable<Product[]> {
    return this.http.put<Product[]>(`${this.prod_url}/${id}`, formdata);
  }

  // Get single product
  getsingleprod(id: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.prod_url}/${id}`);
  }

  // Delete product
  deleterod(id: any): Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.prod_url}/${id}`);
  }
}
