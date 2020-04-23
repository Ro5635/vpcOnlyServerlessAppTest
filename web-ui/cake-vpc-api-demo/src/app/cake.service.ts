import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Cake } from "./Cake"
import { map } from "rxjs/operators";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  cakeResourceURI = environment.cakeResourceURI;

  constructor(private http: HttpClient) { }

  getCakes(): Observable<Cake[]> {
    let httpParams = new HttpParams();

    return this.http.get(this.cakeResourceURI, {
      params: httpParams
    }).pipe(
      map((cakeResponse: Cake[]) => cakeResponse )
    );
  }
}
