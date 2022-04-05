import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizen } from '../model/citizen';
import { Role } from '../model/role';


@Injectable()
export class RoleService {

    constructor(private http: HttpClient) { }


    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>('http://localhost:8080/ruoli');
    }

    getById(val): Observable<Role> {
        return this.http.get<Role>('http://localhost:8080/ruoli/' + val);
    }
}