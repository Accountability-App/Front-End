import { Time } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ModalController} from '@ionic/angular';
import { RepeatSelectorComponent } from '../repeat-selector/repeat-selector.component';
import { HttpService } from './http.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController: ModalController, private _http: HttpService) {}

  // ngOnInit()
  // {
  //   this.getBuddyList();
  // }

  toggleChange()
  {

    if (!this.repeatFlag)
    {
      this.presentModal()
    }
    else
    {
      this.repDays = null
      this.repEndDate = null
    }
  }
  
  async presentModal() 
  {
    const modal = await this.modalController.create({
      component: RepeatSelectorComponent,
      componentProps: 
      {
        repeatFlag: this.repeatFlag,
        repeatDays: this.repDays,
        repeatEndDate: this.repEndDate,
      }
    });
    await modal.present();
    modal.onDidDismiss()
    // .then( res => alert(JSON.stringify(res)) )
    .then((repData) => {
      this.repeatFlag = repData.data.repeatData[0]
      this.repDays = repData.data.repeatData[1]
      this.repEndDate = repData.data.repeatData[2]
      });

  }

  // async getUser()
  // {
  //   this._http.getData().subscribe(data => {
  //     this.username = data;
  //     console.log(this.profileData);
  //     })
    
  // }

  // async getBuddyList()
  // {
  //   //WE NEED CURRENT USER FOR THIS
  //   this.buddies = await this._http.getBuddies(this.username).toPromise();

  // }

  // sendTask()
  // {
  //   //
  //   let taskData = 
  //   {
  //     "title_of_task": this.taskName,
  //     "description_of_task": this.taskDesc,
  //     "time_of_task": this.dueTime,
  //     "date_of_task": this.dueDate,
  //     "profile_id": "00000000",
  //     "helper_id": "90000011",
  //     "task_id": "00000002"
  //     // and then we need to put in buddies and repeat data as well
  //   };
  // }

  save()
  {
    alert("Task Created");
  }

  cancelled()
  {
    alert("Cancelled");
  }


  // IDK I ADDED THIS TO FIX DATETIME MAX AND MIN
  // profileData: Object;
  public username: any = "BillyBob";
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
  public buddies = ['Bud1', 'Bud2', 'Steve', 'Bud4'];
  // public buddies: any;

  //USER INPUT TO SAVE
  public taskName: string;
  public taskDesc: string;
  public dueDate: string = this.date
  public dueTime: string;
  public repeatFlag: boolean = false;
  public repDays: [string];
  public repEndDate: Date;
  public pickedBuddies: [string];
  public repEndTime: Time;






}
