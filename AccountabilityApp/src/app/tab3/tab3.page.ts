import { Time } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { RepeatSelectorComponent } from '../repeat-selector/repeat-selector.component';
import { HttpService } from './http.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private modalController: ModalController, private _http: HttpService, private router: Router) {}

  ngOnInit()
  {

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
    alert("Reset all entries")
    // this.router.navigateByUrl('/tabs/tab3')
    // window.location.reload(true)
    
  }

  save()
  {
    alert("Task Created");
    this.router.navigateByUrl('/tabs/tab1');
  }

  cancelled()
  {
    alert("Cancelled");
    this.router.navigateByUrl('/tabs/tab1');
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
