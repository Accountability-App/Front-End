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

    async acceptRequest(username1: string, username2: string) {
        await this.http.get("http://localhost:8082/BuddyTab/respondToFriendRequest/" + username1 + "/" + username2 + "/Accept").toPromise();
    }

    async denyRequest(username1: string, username2: string){
        await this.http.get("http://localhost:8082/BuddyTab/respondToFriendRequest/" + username1 + "/" + username2 + "/Deny").toPromise();
    }
}