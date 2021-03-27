import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get("assets/profileSample.json");
    }

    getTaskData() {
        return this.http.get("assets/taskSample.json")
    }


}
