import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-buddies-modal',
  templateUrl: './buddies-modal.component.html',
  styleUrls: ['./buddies-modal.component.scss'],
})
export class BuddiesModalComponent implements OnInit {

  requests: any;

  constructor(public modalController: ModalController, private _http: HttpService) { }

  ngOnInit() {
    this._http.getRequests().subscribe(data => {
      this.requests = data;
      console.log(this.requests);
    })
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  accept(username: string) {
    // TODO: add to buddies list (database)

    this.removeRequest(username);
  }

  removeRequest(request: string) {
    // TODO: remove from requests (database)

    let index = this.requests.map(function(rq) { return rq.username; }).indexOf(request);

    if(index > -1){
      this.requests.splice(index, 1);
    }
  }

}
