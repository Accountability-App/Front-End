import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { BuddiesModalComponent } from '../buddies-modal/buddies-modal.component';
import { BuddiesPopoverComponent } from '../buddies-popover/buddies-popover.component'
import { HttpService } from './http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  buddies: any;
  length: number;
  username: string;

  constructor(public popoverController: PopoverController, public modalController: ModalController, private _http: HttpService, private router: Router) { }

  ngOnInit() {
    this.username = "RoketWarrior";
    this.getBuddies();
  }

  async getBuddies() {
    this.buddies = await this._http.getBuddies(this.username).toPromise();
    this.length = this.buddies.length;
  }

  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: BuddiesPopoverComponent
    });
    return await popover.present();
  }

  async presentModal(event) {
    const modal = await this.modalController.create({
      component: BuddiesModalComponent
    });
    return await modal.present();
  }

  visitProfile(username) {
    this.router.navigateByUrl("/profile/" + username);
  }
}