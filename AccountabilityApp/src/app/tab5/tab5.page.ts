import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component'
import { HttpService } from './http.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})

export class Tab5Page {

  profileData: Object;
  username: Object;
  firstName: Object;
  tag: Object;
  description: Object;

  constructor(public popoverController: PopoverController, private _http: HttpService) {

  }

  //Get all data initially
  ngOnInit() {
    this._http.getData().subscribe(data => {
      this.profileData = data;
      console.log(this.profileData);
    })
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
  }

  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent
    });
    return await popover.present();
  }

 
}
