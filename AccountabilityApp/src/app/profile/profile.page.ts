import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../buddies-modal/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private _http: HttpService) { }

  exists: boolean = true;
  otherUsername: string;

  friends: boolean = true;
  notFriends: boolean = false;
  outgoingRequest: boolean = false;
  incomingRequest: boolean = false;

  ngOnInit() {
    this.otherUsername = this.route.snapshot.params.id;
  }

  ngAfterViewInit() {
    let element = document.getElementById("username-field");
    if (element) {
      element.textContent = this.otherUsername;
    }
  }

  close() {
    this.router.navigateByUrl("/tabs/tab2");
  }

}
