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
  username: string;
  otherUsername: string;
  name: string;
  friendStatus: number;
  friendData: any;

  ngOnInit() {
    this.username = "RoketWarrior";
    this.getFriendData();
  }

  async getFriendData() {
    this.otherUsername = this.route.snapshot.params.id;
    this.friendData = await this._http.getFriendStatus(this.username, this.otherUsername).toPromise();
    if (this.friendData.friendStatus === -1) {
      this.exists = false;
    } else {
      this.friendStatus = this.friendData['friendStatus'];
      this.name = this.friendData['givenName'] + ' ' + this.friendData['familyName'];
    }
  }

  close() {
    this.router.navigateByUrl("/tabs/tab2");
  }

  addUser() {
    this.friendStatus = 3;
    this._http.addUser(this.username, this.otherUsername);
  }

  removeUser() {
    this.friendStatus = 0;
    this._http.removeUser(this.username, this.otherUsername);
  }

  acceptRequest() {
    this.friendStatus = 1;
    this._http.acceptRequest(this.username, this.otherUsername);
  }

  cancelRequest() {
    this.friendStatus = 0;
    this._http.cancelRequest(this.username, this.otherUsername);
  }
}
