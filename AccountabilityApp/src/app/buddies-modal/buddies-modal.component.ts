import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-buddies-modal',
  templateUrl: './buddies-modal.component.html',
  styleUrls: ['./buddies-modal.component.scss'],
})
export class BuddiesModalComponent implements OnInit {

  username: string;
  requests: any;
  length: number;

  constructor(public modalController: ModalController, private _http: HttpService, private router: Router) { }

  ngOnInit() {
    this.username = "Th3IronDruid";
    this.getRequests();
  }

  async getRequests() {
    this.requests = await this._http.getRequests(this.username).toPromise();
    this.length = this.requests.length;
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  accept(username: string) {
    let data = this._http.acceptRequest(this.username, username);
    console.log(data);
    this.removeRequest(username);
  }

  deny(username: string) {
    let data = this._http.denyRequest(this.username, username);
    console.log(data);
    this.removeRequest(username);
  }

  removeRequest(request: string) {
    let index = this.requests.map(function(rq) { return rq.username; }).indexOf(request);

    if(index > -1){
      this.requests.splice(index, 1);
    }
  }

  visitProfile(username) {
    this.dismiss();
    this.router.navigateByUrl("/profile/" + username);
  }

}
