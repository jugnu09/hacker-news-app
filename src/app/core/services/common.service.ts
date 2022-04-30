import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class CommonServie {
    constructor(private _router: Router) {}

    navigateToWithData(url?: string, id?: any): void {
        this._router.navigate([url], { queryParams: { id: id }});
    }
}