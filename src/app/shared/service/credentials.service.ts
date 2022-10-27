import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor() { }

  
saveToken(token: string): Observable<string> {
  
  sessionStorage.setItem('bearerToken', token);
  console.log("Entro Aqui")
  return new Observable(observer => {

        observer.next(token);
        observer.complete();

  })
};

getToken(): Observable<string> {

  return new Observable(observer => {

        observer.next(sessionStorage.getItem('bearerToken'));
        observer.complete();

  })
};


saveNameSignIn(token: string): Observable<string> {
  
  sessionStorage.setItem('nombre_sing_in', token);
  return new Observable(observer => {

        observer.next(token);
        observer.complete();

  })
};

getNameSignIn(): Observable<string> {

  return new Observable(observer => {

        observer.next(sessionStorage.getItem('nombre_sing_in'));
        observer.complete();

  })
};

}
