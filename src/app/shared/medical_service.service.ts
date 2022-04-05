import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MedicalService } from '../model/medical_service';

@Injectable()
export class MedicalServiceService {

    constructor(private http: HttpClient) { }


    getMedicalServices(): Observable<MedicalService[]> {
        return this.http.get<MedicalService[]>('http://localhost:8080/prestazioni');
    }

    getById(val): Observable<MedicalService> {
        return this.http.get<MedicalService>('http://localhost:8080/prestazioni/' + val);
    }

    getByName(val): Observable<MedicalService> {
        return this.http.get<MedicalService>(`http://localhost:8080/prestazioni/service/${val}`);
    }

}