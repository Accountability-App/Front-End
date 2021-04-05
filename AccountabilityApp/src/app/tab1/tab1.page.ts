import { Component } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
//import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';
//import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { HttpService } from './http.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  taskData: Object;
  profileData: Object;

  constructor(private _http: HttpService) { }


  ngOnInit() {
    this._http.getTaskData().subscribe(t_data => {
      this.taskData = t_data;
      console.log(this.taskData);
    } )
    this._http.getData().subscribe(p_data => {
      this.profileData = p_data;
      console.log(this.profileData);
    })
  }

}
