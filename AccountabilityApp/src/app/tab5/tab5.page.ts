import { Component } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { HttpService } from './http.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})

export class Tab5Page {

  profileData: Object;
  localDataTest: Object;
  /*Don't this this is neccessary
  username: Object;
  firstName: Object;
  tag: Object;
  description: Object;
  */

  constructor(public popoverController: PopoverController, public modalController: ModalController, private _http: HttpService) { }

  //TODO: include data for background picture (backPic) and profile picture (profPic)

  //Get all data initially
  ngOnInit() {
    this._http.getData().subscribe(data => {
      this.profileData = data;
      console.log(this.profileData);
    })

    this._http.getTaskData().subscribe(data => {
      this.localDataTest = data;
      console.log(this.localDataTest);
    })
    /* Don't this this is neccessary 
    this._http.getUsername().subscribe(data => {
      this.username = data;
    })
    this._http.getFirstName().subscribe(data => {
      this.firstName = data;
    })
    this._http.getTag().subscribe(data => {
      this.tag = data;
    })
    this._http.getDescription().subscribe(data => {
      this.description = data;
    })
    */
  }

  //maybe delete popover event
  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent
    });
    return await popover.present();
  }

  async presentModal(event) {
    const modal = await this.modalController.create({
      component: ProfileModalComponent
    });
    return await modal.present();
  }

}
