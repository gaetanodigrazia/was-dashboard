import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) { }


    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>('http://localhost:8083/customer-service');
    }

    getCustomersByStatus(status: number): Observable<Customer[]> {
        return this.http.get<Customer[]>('http://localhost:8083/customer-service/status/' + status);
    }

}
