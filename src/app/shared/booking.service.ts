import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Booking } from '../model/booking';

@Injectable()
export class BookingService {

    constructor(private http: HttpClient) { }


    getBookings(): Observable<Booking[]> {
        return this.http.get<Booking[]>('http://localhost:8080/prenotazioni');
    }

    getBookingsByStatus(status: number): Observable<Booking[]> {
        return this.http.get<Booking[]>('http://localhost:8080/prenotazioni/status/' + status);
    }

    getBookingsById(booking_id: number): Observable<Booking[]> {
        return this.http.get<Booking[]>('http://localhost:8080/prenotazioni/' + booking_id);
    }

    insertBooking(booking: Booking): Observable<Booking> {
        console.log(booking);
        return this.http.post<Booking>('http://localhost:8080/prenotazioni', booking);
    }


    deleteBooking(id_booking: number) {
        return this.http.delete('http://localhost:8080/prenotazioni/' + id_booking).subscribe(data => {
            console.log(data);
        });;
    }
}
