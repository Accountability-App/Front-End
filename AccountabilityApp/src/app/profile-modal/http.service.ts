import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    //TODO: This gives a weird error
    saveDescription(username, description) {
        return this.http.get("http://localhost:8082/ProfileTab/updateDesc/" + username +"/"+ description)
    }

    /*Uncomment if saving username and password to database through edit profile
    saveUsername(username, new_username) {
        //await this.http.get("http://localhost:8082/ProfileTab/" + username +"/saveUsername", new_username).subscribe();
        return true
    }

    savePassword(username, new_password) {
        //await this.http.get("http://localhost:8082/ProfileTab/" + username +"/savePassword", new_password).subscribe();
        return
    }
    Uncomment if saving username and password to database through edit profile */
    
}
