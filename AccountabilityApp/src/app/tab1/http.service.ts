import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    /*getData() {
        return this.http.get("assets/profileSample.json");
    }

    getTaskData() {
        return this.http.get("assets/taskSample.json")
    }*/
    getProfileData() {
        return this.http.get("http://localhost:8082/ProfileTab/RoketWarrior");
    }
    getMyTasks(username: string) {
        return this.http.get("http://localhost:8082/TaskTab/getMyTasks/" + username);
    }

    //removeData(task_id: number){
        //var task = "";
        //for(task in "this.http.get(assets/taskSample.json)"){
        //    console.log("a");
        //}
    //}
}
