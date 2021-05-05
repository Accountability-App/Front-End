// import * as https from 'https';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './tab3.page';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    getBuddies(username: string) {
        return this.http.get("http://localhost:8082/TaskTab/getBuddyUsername/" + username);
    }


    async sendTask(taskData: any) 
    {
        const retData = JSON.stringify(taskData)

        const options: any = 
        {
            hostname: 'localhost',
            port: 8082,
            path: '/TaskTab/createTask',
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json',
                'Content-Length': retData.length
            },
            responseType: 'text' as 'json',
            rejectUnauthorized: false

        }

        this.http.post<any>("http://localhost:8082/TaskTab/createTask", taskData).subscribe({
            next: data => {
                console.log(data)
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })

        // const req = https.request({...options}, res => {
        //     console.log(`status code: ${res.statusCode}`)

        //     // res.on('retData', d => {
        //     //     process.stdout.write(d)
        //     // })
        // })

        // req.on('error', error => {
        //     console.error(error)
        //   })

        //   req.write(retData)
        //   req.end()

        // await this.http.get("http://localhost:8082/BuddyTab/respondToFriendRequest/" + username1 + "/" + username2 + "/Accept").toPromise();
    }
}