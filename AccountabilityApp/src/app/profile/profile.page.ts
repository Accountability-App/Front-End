import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../profile/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private _http: HttpService) { }

  exists: boolean = true;
  username: string = "ArchDruid";
  otherUsername: string;
  friendStatus: number;
  friendData: any;

  ngOnInit() {
    this.getFriendData();
  }

  ngAfterViewInit() {
    let element = document.getElementById("username-field");
    if (element) {
      element.textContent = this.otherUsername;
    }
  }

  async getFriendData() {
    this.otherUsername = this.route.snapshot.params.id;
    const data = await this._http.getFriendStatus(this.username, this.otherUsername).toPromise();
    this.friendStatus = data['friendStatus'];
  }

  close() {
    this.router.navigateByUrl("/tabs/tab2");
  }

  addUser() {
    this.friendStatus = 3;
    // TODO: add http request 
  }

  removeUser() {
    this.friendStatus = 0;
    // TODO: add http request
  }

  acceptRequest() {
    this.friendStatus = 1;
    // TODO: add http request
  }

  cancelRequest() {
    this.friendStatus = 0;
    // TODO: add http request
  }


}
