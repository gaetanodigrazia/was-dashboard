import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInputDTO } from '../pages/product_view/models/ProductInputDTO';
import { ProductDetailsDTO } from '../pages/product_view/models/ProductDetailsDTO';
import { ProductTableDTO } from '../pages/product_view/models/ProductTableDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8082/product-service';

  constructor(private http: HttpClient) { }

  createProduct(productInput: ProductInputDTO): Observable<ProductDetailsDTO> {
    return this.http.post<ProductDetailsDTO>(`${this.baseUrl}`, productInput);
  }

  getAllProducts(): Observable<ProductTableDTO[]> {
    return this.http.get<ProductTableDTO[]>(`${this.baseUrl}`);
  }

  getProductById(productId: string): Observable<ProductDetailsDTO> {
    return this.http.get<ProductDetailsDTO>(`${this.baseUrl}/byId/${productId}`);
  }

  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${productId}`);
  }

  updateProduct(product: ProductDetailsDTO, productId:string): Observable<ProductDetailsDTO> {
    return this.http.put<ProductDetailsDTO>(`${this.baseUrl}/${productId}`,product);
  }

}
