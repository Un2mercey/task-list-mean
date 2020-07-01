import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class WebRequestService {

    private readonly ROOT_URL: string;

    constructor(
        private http: HttpClient
    ) { 
        this.ROOT_URL = 'http://localhost:3000';
    }
    
    public get = (uri: string): Observable<Object> => {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }

    public post = (uri: string, payload: Object): Observable<Object> => {
        return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    }

    public patch = (uri: string, payload: Object): Observable<Object> => {
        return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
    }

    public delete = (uri: string): Observable<Object> => {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }
}
