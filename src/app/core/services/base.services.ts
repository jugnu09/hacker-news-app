import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BaseService {
    apiBaseUrl: string;
    constructor(public _httpClient: HttpClient) {
     }
    
    get<T>(url) : Observable<T> {
        return this._httpClient.get<T>(this.apiBaseUrl + url)
    }
}