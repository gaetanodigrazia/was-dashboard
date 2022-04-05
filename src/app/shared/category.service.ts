import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Citizen } from '../model/citizen';


@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>('http://localhost:8080/categorie');
    }

    getCategoryByName(val): Observable<Category> {
        return this.http.get<Category>('http://localhost:8080/categorie/nome/' + val);
    }

}