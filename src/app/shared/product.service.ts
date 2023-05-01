import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Booking } from '../model/booking';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }


    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:8082/product-service');
    }

    getBookingsByStatus(status: number): Observable<Booking[]> {
        return this.http.get<Booking[]>('http://localhost:8080/prenotazioni/status/' + status);
    }

}
