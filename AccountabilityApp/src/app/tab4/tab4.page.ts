import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

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
