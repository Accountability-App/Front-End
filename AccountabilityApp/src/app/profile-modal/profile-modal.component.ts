import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  profileData: any;

  constructor(public modalController: ModalController, private _http: HttpService) { }

  ngOnInit() {
    this._http.getData().subscribe(data => {
      this.profileData = data;
      console.log(this.profileData);
    })
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  async save(event) {
    console.log("Saving...");
    //TODO: write code that saves data to database
    console.log("Done.");
    this.dismiss();
  }
}
