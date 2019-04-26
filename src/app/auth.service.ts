import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    const body = {
      user: {
        email: email,
        password: password
      }
    };

    return this.httpClient
      .post('http://localhost:3000/api/users/login', body)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          alert(err.error.body[0]);
          return of({
            user: {}
          });
        }),
        map(response => (response as any).user.token)
      );
  }
}
