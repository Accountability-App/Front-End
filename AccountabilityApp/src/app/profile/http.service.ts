import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    getFriendStatus(username1: string, username2: string) {
        return this.http.get("http://localhost:8082/BuddyTab/checkFriendStatus/" + username1 + "/" + username2);
    }
}