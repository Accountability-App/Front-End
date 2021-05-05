import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  taskData: Object;
  specificProfileData: Object;
  myArray: any;
  length: number;

  constructor(private _http: HttpService, private router: Router) { }
  username: string;

  ngOnInit() {
    this.username = "RoketWarrior";
    this.grabTaskData();
  }

  async grabTaskData() {
    this._http.getMyTasks(this.username).subscribe(task_data => {
      this.taskData = task_data;
      this.myArray = JSON.stringify(this.taskData);
      this.length = this.myArray.length;
    })
  }
}
