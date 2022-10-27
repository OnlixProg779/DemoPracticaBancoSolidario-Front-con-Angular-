import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { HandleErrorsHttp } from 'src/app/shared/service/handle-errors-http';
import { CreateTiempoPlanDeAhorroCommand } from '../models/TypeBill/commands/create-tiempo-plan-de-ahorro-command';

const API_URL = environment.apiURLMicroserviceNuevaCuentaAhorro + '/api/0v1/TiempoPlanDeAhorro';

@Injectable({
  providedIn: 'root'
})
export class TypeBillService extends HandleErrorsHttp{

  constructor(private http: HttpClient) {
    super();
  }
  registerNewTiempoPlanDeAhorro(
    request: CreateTiempoPlanDeAhorroCommand
  ): Observable<any> {

    var headers = new HttpHeaders({
      'Content-Type': environment.mediaTypes.tiempoPlanDeAhorro.post.ContentType.postJson
    });

    return this.http.post<any>(
      `${API_URL}`,
      request,
      {
        headers: headers,
        observe: 'response' as 'body',
        responseType: 'json',
      }
    ).pipe(
      tap((resp: HttpResponse<any>) => {
        // var entity:RegistrationResponse = resp.body;
        console.log(resp);
        // this.credentialService.saveToken(entity.token);
        // this.credentialService.saveNameSignIn(entity.username);
      }),
      catchError(this.handleError)
    );
  }


  getAllTiempoPlanDeAhorro(
    params: HttpParams
  ): Observable<any> {
    var headers;

    var eTag;
    eTag = localStorage.getItem('If-None-Match-get------');

    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: environment.mediaTypes.tiempoPlanDeAhorro.getAll.accept.getAllclientJson,
      'If-None-Match': `"${eTag}"`,
    });

    return this.http
      .get<any>(
        `${API_URL}/pagination`,
        {
          headers: headers,
          observe: 'response' as 'body',
          responseType: 'json',
          params,
        })
      .pipe(
        tap((resp: HttpResponse<any>) => {
          // var entity:RegistrationResponse = resp.body;

        }),
        catchError(this.handleError)
      );
  }


  getUniqueTiempoPlanDeAhorro(
    id: string,
    params: HttpParams
  ): Observable<any> {
    var headers;

    var eTag;
    eTag = localStorage.getItem('If-None-Match-get------');

    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: environment.mediaTypes.tiempoPlanDeAhorro.getUnique.accept.getClientJson,
      'If-None-Match': `"${eTag}"`,
    });

    return this.http
      .get<any>(
        `${API_URL}/${id}`,
        {
          headers: headers,
          observe: 'response' as 'body',
          responseType: 'json',
          params,
        })
      .pipe(
        tap((resp: HttpResponse<any>) => {
          // var entity:RegistrationResponse = resp.body;

        }),
        catchError(this.handleError)
      );
  }
}
