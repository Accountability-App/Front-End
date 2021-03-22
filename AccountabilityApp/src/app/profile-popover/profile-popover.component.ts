import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-profile-popover',
  templateUrl: './profile-popover.component.html',
  styleUrls: ['./profile-popover.component.scss'],
})
export class ProfilePopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

  async save(event) {
    console.log("Saving...");
    //TODO: write code that saves data to database
    console.log("Done.");
    this.close();
  }
}
