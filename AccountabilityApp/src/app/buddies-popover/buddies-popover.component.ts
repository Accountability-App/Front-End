import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-buddies-popover',
  templateUrl: './buddies-popover.component.html',
  styleUrls: ['./buddies-popover.component.scss'],
})
export class BuddiesPopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

}
