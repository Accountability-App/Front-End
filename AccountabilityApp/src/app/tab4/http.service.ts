import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    getMyTasks(username: string) {
        return this.http.get("http://localhost:8082/TaskTab/getHelpingTasks/" + username);
    }
}