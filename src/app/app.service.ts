import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class AppService {
    apiURL: string = 'https://api.spacexdata.com/v3/launches?limit=100';

    constructor(private httpClient: HttpClient) { }

    getSpacexData(year?, ll?, ls?) {
        if (year || ll || ls) {
            return this.httpClient.get(`${this.apiURL}&&launch_year=${year}&&launch_success=${ls}&&land_success=${ll}`);
        } else {
            return this.httpClient.get(`${this.apiURL}`);
        }
    }
}