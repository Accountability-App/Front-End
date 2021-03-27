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

    /* Don't this this is neccessary 
    //Need to get and retrun specific data from file for each function
    getUsername() {
        return this.http.get("assets/sample.json");
    }

    getFirstName() {
        return this.http.get("assets/sample.json");
    }

    getTag() {
        return this.http.get("assets/sample.json");
    }

    getDescription() {
        return this.http.get("assets/sample.json");
    }

    getCurrentTasks() {
        return this.http.get("assets/sample.json");
    }

    getProfilePic() {
        return this.http.get("assets/sample.json");
    }

    getBackPic() {
        return this.http.get("assets/sample.json");
    }
    */
}
