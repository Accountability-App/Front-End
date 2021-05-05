import { Component } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
//import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';
//import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { Router } from '@angular/router';
import { HttpService } from './http.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  taskData: Object;
  specificProfileData: Object;
  myArray: any;

  constructor(private _http: HttpService, private router: Router) { }
  username: string;

  ngOnInit() {
    this._http.getProfileData().subscribe(prof_data => {
      this.specificProfileData = prof_data;
      console.log(this.specificProfileData);
    })
    this.username = "RoketWarrior";
    // this.username = "ArchDruid";
    this.grabTaskData();
  }

  async grabTaskData() {
    this._http.getMyTasks(this.username).subscribe(task_data => {
      this.taskData = task_data;
      console.log(task_data);
      this.myArray = JSON.stringify(this.taskData);
      console.log("Task Data is: " + this.myArray);
    })
    //this.requests = await this._http.getMyTasks(this.username).toPromise();
    //this.length = this.requests.length;
    //console.log("p " + this.requests);
  }

  check_tasks(message: string){
    alert('you deleted task: ' + message)
  }
  trackByFn(index, curr_task) { 
    console.log("curr_task is " + index);
    return curr_task;
  }
  /*removeData(t_id: number){
    //alert(task_id);
    console.log("New Remove Pushed")
    //console.log(Object.keys(this.taskData).length);
    //var j:any = Object.keys(this.taskData).length;
    //console.log(j)
    let found_element: boolean = false
    var i:number = 0
    while(found_element == false) {
      if(this.taskData[i])
      {
      console.log("task with info id: " + this.taskData[i].original_task_id);
      console.log(this.taskData[i].title_of_task);
      console.log("this t_id " + t_id);
      //console.log(this.taskData[i][0]);
      //console.log(Object.keys(this.taskData[i].profile_id))
        if(this.taskData[i].original_task_id == t_id)
        {
          //console.log(this.taskData[i][4]);
          console.log("aaa");
          //this.taskData[i].task_id = "";
          console.log("task removed: " + this.taskData);
          //p = this.taskData[i]
          //this.taskData.push(p)
          this.check_tasks(this.taskData[i].title_of_task);
          delete this.taskData[i];
          //this.router.navigateByUrl('/tabs/tab1');
          var p = this.taskData;
          console.log(p);
          found_element = true;
          //console.log(this.taskData
          //this.taskData[i].push(this.taskData[i])
        }
        else if((this.taskData[i].original_task_id >= t_id) && (this.taskData[i].original_task_id != 99999999))
        {
          console.log("Element Not Found");
          found_element = true;
        }
      }
      i = i + 1
    }
  }*/

}
