import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerInputDTO } from '../pages/customer_view/models/CustomerInputDTO';
import { CustomerDetailsDTO } from '../pages/customer_view/models/CustomerDetailsDTO';
import { CustomerTableDTO } from '../pages/customer_view/models/CustomerTableDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8083/customer-service';

  constructor(private http: HttpClient) { }

  createCustomer(customerInput: CustomerInputDTO): Observable<CustomerDetailsDTO> {
    return this.http.post<CustomerDetailsDTO>(`${this.baseUrl}`, customerInput);
  }

  getAllCustomers(): Observable<CustomerTableDTO[]> {
    return this.http.get<CustomerTableDTO[]>(`${this.baseUrl}`);
  }

  getCustomerById(customerId: string): Observable<CustomerDetailsDTO> {
    return this.http.get<CustomerDetailsDTO>(`${this.baseUrl}/byId/${customerId}`);
  }

  getCustomersByName(name: string): Observable<CustomerTableDTO[]> {
    return this.http.get<CustomerTableDTO[]>(`${this.baseUrl}/byName/${name}`);
  }

  deleteCustomer(customerId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${customerId}`);
  }

  updateCustomer(customer: CustomerDetailsDTO, customerId:string): Observable<CustomerDetailsDTO> {
    return this.http.put<CustomerDetailsDTO>(`${this.baseUrl}/${customerId}`,customer);
  }

}
