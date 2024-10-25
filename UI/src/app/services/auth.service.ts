import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //private apiUrl = 'http://localhost:5062/api/auth';
    private apiUrl = 'http://34.210.21.76:5062/api/auth';
    private currentUser: any;

    constructor(private http: HttpClient) { }

    register(user: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, user).pipe(
            catchError(error => {
                if (error.status === 409) {
                    return throwError(() => new Error('Username already exists'));
                }
                return throwError(() => new Error('Registration failed'));
            })
        );
    }

    login(user: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, user).pipe(
            tap(response => {
                this.currentUser = response;
            })
        );
    }

    getCurrentUser() {
        return this.currentUser;
    }
}
