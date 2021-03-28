import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { RepeatSelectorComponent } from '../repeat-selector/repeat-selector.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController: ModalController) {}
  
  async presentModal(event) {
    const modal = await this.modalController.create({
      component: RepeatSelectorComponent
    });
    await modal.present();
  }



  // IDK I ADDED THIS TO FIX DATETIME MAX AND MIN
  public date: string = new Date().toISOString();
  public time: any = new Date().getTime();
  public currYear: string = new Date().toLocaleDateString();
  public maxDate : any = (new Date()).getFullYear() + 2;
  public currHour24: any = new Date().getHours() //still in 24 hr
  public currAMPM: string = this.currHour24 >= 12? 'PM' : 'AM';
  //make currHour in 12hr format
  public currHour12: any = this.currHour24 % 12 || 12
  public currMinute: any = ('0' + (new Date().getMinutes())).slice(-2)
  public currTime: any = this.currHour12 + ":" + this.currMinute + " " + this.currAMPM;
  //repeat stuff
  public buddies = ['Bud1', 'Bud2', 'Steve', 'Bud4']

  //USER INPUT TO SAVE
  public taskName: string = "Task Name";
  public taskDesc: string = "Task Description";
  public dueDate: Date;
  public dueTime: string;
  public repeatFlag: boolean = false;
  public repDays: [string];
  public repEndDate: Date;
  public pickedBuddies: [string];






}
