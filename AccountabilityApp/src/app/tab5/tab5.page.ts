import { Component } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { HttpService } from './http.service';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})

export class Tab5Page {

  profileData: any;

  constructor(public modalController: ModalController, private _http: HttpService) { }

  //TODO: include data for background picture (backPic) and profile picture (profPic)

  //Get all data initially
  ngOnInit() {
      this.getProfileData();
  }

  async presentModal(event) {
    const modal = await this.modalController.create({
      component: ProfileModalComponent
    });
    return await modal.present();
  }

  getProfileData(){
    this._http.getData().subscribe(data => {
        this.profileData = data;
        console.log(this.profileData);
      });
  }

  reloadPage() {
  location.reload();
  }

  /*
  updatePage() {
  this._http.getData().subscribe(data => {
      this.profileData = data;
      console.log(this.profileData);
    })
  }
  */
}
