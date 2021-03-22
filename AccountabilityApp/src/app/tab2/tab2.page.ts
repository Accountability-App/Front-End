import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BuddiesPopoverComponent } from '../buddies-popover/buddies-popover.component'
import { HttpService } from './http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  buddies: Object;

  constructor(public popoverController: PopoverController, private _http: HttpService) {

  }

  ngOnInit() {
    this._http.getBuddies().subscribe(data => {
      this.buddies = data;
      console.log(this.buddies);
    })
  }

  async presentPopover(event) {
    const popover = await this.popoverController.create({
      component: BuddiesPopoverComponent
    });
    return await popover.present();
  }
}