import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pathology } from '../model/pathology';


@Injectable()
export class PathologyService {

    constructor(private http: HttpClient) { }


    getPathologies(): Observable<Pathology[]> {
        return this.http.get<Pathology[]>('http://localhost:8080/patologie');
    }

    getPathologyByName(val): Observable<Pathology> {
        return this.http.get<Pathology>('http://localhost:8080/patologie/nome/' + val);
    }
    getPathologyByCitizenId(val): Observable<Pathology> {
        return this.http.get<Pathology>(`http://localhost:8080/patologie/nome/byid/${val}`);
    }

}