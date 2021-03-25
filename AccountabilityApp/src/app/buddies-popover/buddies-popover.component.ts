import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-buddies-popover',
  templateUrl: './buddies-popover.component.html',
  styleUrls: ['./buddies-popover.component.scss'],
})
export class BuddiesPopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController, private router: Router) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

  async search() {
    let username = (document.getElementById("username-search") as HTMLInputElement).value;
    this.close()
    this.router.navigateByUrl("/profile/" + username);
  }

}
