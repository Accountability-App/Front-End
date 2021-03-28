import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

  //TODO: Somehow get this to get data from the logged in user, not just ArchDruid
    getData() {
        return this.http.get("http://localhost:8082/ProfileTab/ArchDruid");
    }

    getTaskData() {
        return this.http.get("assets/taskSample.json")
    }


}
