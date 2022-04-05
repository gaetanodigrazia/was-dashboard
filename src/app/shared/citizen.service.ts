import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizen } from '../model/citizen';


@Injectable()
export class CitizenService {

    constructor(private http: HttpClient) { }


    getCitizens(): Observable<Citizen[]> {
        return this.http.get<Citizen[]>('http://localhost:8080/cittadini');
        console.log("called")
    }

    getById(val): Observable<Citizen> {
        return this.http.get<Citizen>('http://localhost:8080/cittadini/' + val);
    }

    getBySSN(val): Observable<Citizen> {
        return this.http.get<Citizen>('http://localhost:8080/cittadini/search/ssn?ssn=' + val);
    }

    /** PUT: update the hero on the server. Returns the updated hero upon success. */
    updateCitizen(citizen: Citizen): Observable<Citizen> {
        console.log("Update called from angular component")
        console.log(citizen.email)
        console.log("Citizen id: " + citizen.id)
        return this.http.put<Citizen>('http://localhost:8080/cittadini?id=' + citizen.id, citizen);
    }
}