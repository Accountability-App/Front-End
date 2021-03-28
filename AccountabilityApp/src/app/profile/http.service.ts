import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    getRequests(username: string) {
        return this.http.get("http://localhost:8082/BuddyTab/getIncomingFriends/" + username);
    }
}