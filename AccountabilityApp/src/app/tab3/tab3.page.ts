import { Time } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { RepeatSelectorComponent } from '../repeat-selector/repeat-selector.component';
import { HttpService } from './http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Task 
{
  createdBy: String;
  taskName: String;
  details: String;
  completeTime: String;
  completeDay: String;
  buddies: Array<string>;
  repeat: boolean;
  repWeekDay: Array<boolean>;

}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  constructor(private modalController: ModalController, private _http: HttpService, private router: Router) {}


  async ngOnInit()
  {
    this.username = "RoketWarrior";
    // this.username = "ArchDruid";
    this.buddies = await this._http.getBuddies(this.username).toPromise();
    this.repBoolDays = [false,false,false,false,false,false,false]
  }
  // async getBuddies() {
  //   this.buddies = await this._http.getBuddies(this.username).toPromise();
  // }

  toggleChange()
  {

    if (!this.repeatFlag)
    {
      // this.presentModal()
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

  reset()
  {
    // alert("Reset all entries")
    this.taskName = null
    this.taskDesc = null
    this.dueDate = this.date
    this.dueTime = this.time
    this.repeatFlag = false;
    this.repDays = [null];
    this.repBoolDays = [false,false,false,false,false,false,false]
    this.repEndDate = null
    this.pickedBuddies = [null]
    this.repEndTime = null
    // this.router.navigateByUrl('/tabs/tab3')
    window.location.reload(true)
    
  }

  save()
  {
    alert("Task Created");
    if (this.repeatFlag) {
      this.changeDateFormat()
    }
    // this.pickedBuddies = this.buddies;
    let taskData: Task = 
    {
      createdBy: this.username,
      taskName: this.taskName,
      details: this.taskDesc,
      completeTime: (new Date(this.dueTime)).toLocaleTimeString(),
      completeDay: (new Date(this.dueDate)).toLocaleDateString(),
      buddies: this.pickedBuddies,
      repeat: this.repeatFlag,
      repWeekDay: this.repBoolDays
    }
    

    this._http.sendTask(taskData);

    this.reset()

    this.router.navigateByUrl('/tabs/tab1');
  }

  cancelled()
  {
    alert("Cancelled");
    this.router.navigateByUrl('/tabs/tab1');
  }
  
  changeDateFormat()
  {

    this.repDays.forEach(element => {
    
      // console.log(element)
      if (element == 'Sunday')
      {
        this.repBoolDays[0] = true
      }
      else if (element == 'Monday')
      {
        this.repBoolDays[1] = true
      }
      else if (element == 'Tuesday')
      {
        this.repBoolDays[2] = true
      }
      else if (element == 'Wednesday')
      {
        this.repBoolDays[3] = true
      }
      else if (element == 'Thursday')
      {
        this.repBoolDays[4] = true
      }
      else if (element == 'Friday')
      {
        this.repBoolDays[5] = true
      }
      else if (element == 'Saturday')
      {
        this.repBoolDays[6] = true
      }
      else
      {
        // alert("Invalid day given")
      }
      
    });
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
  public buddies: any = []
  // public buddies: any;

  //USER INPUT TO SAVE
  public taskName: string;
  public taskDesc: string;
  public dueDate: string = this.date
  public dueTime: string;
  public repeatFlag: boolean = false;
  public repDays: [String];
  public repBoolDays: any = [];
  public repEndDate: Date;
  public pickedBuddies: [string];
  public repEndTime: Time;






}


