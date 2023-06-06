import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
    constructor(private http: HttpClient){ }  
    getCurrency(currencyFrom : string, currencyTo : string ): Observable<any>{
        return this.http.get<any>(`https://v6.exchangerate-api.com/v6/8bc2b42227aea6d5b9a11736/pair/${currencyFrom}/${currencyTo}`)
    }
  }
