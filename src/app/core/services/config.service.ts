import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APP_CONFIG } from "../configs/app.configs";
import { BaseService } from "./base.services";

@Injectable({
    providedIn: 'root'
})

export class ConfigService {
    private _appConfig: any;
    constructor(private _httpClient: HttpClient, private _baseService: BaseService) {}
    
    loadConfig() {
         const promise = new Promise((resolve,reject)=> {
             this._httpClient.get(APP_CONFIG.CONFIG_URL).toPromise().then(data => {
                 this._appConfig = data;
                 this._baseService.apiBaseUrl = this._appConfig.apiBaseUrl;
                 resolve(res => {
                    this._appConfig.apiBaseUrl;
                 });
             })
         })
         return promise;
     }

    apiBaseUrl() : string {
        return this._appConfig.apiBaseUrl;
      }
}
