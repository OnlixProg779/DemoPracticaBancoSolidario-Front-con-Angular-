import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  concatHttpParams(elemets: HttpParams[]): Observable<HttpParams> {


    return new Observable(observer => {
      let paramString: string = "";
      var returnParams = new HttpParams();

      elemets.forEach(element => {
        
       paramString = paramString + element.toString()+'&';
        
     });
      paramString = paramString.slice(0,paramString.length-1);

      var arreloParams = paramString.split("&");
      arreloParams.forEach(element => {
        var auxelem = element.split("=")
        returnParams = returnParams.append(auxelem[0],auxelem[1]);

      });

        observer.next(returnParams);
        observer.complete();
      
    })
  }

  

}
