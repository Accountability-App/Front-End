import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  exists: boolean = true;
  username: string;

  friends: boolean = true;
  notFriends: boolean = false;
  outgoingRequest: boolean = false;
  incomingRequest: boolean = false;

  ngOnInit() {
    this.username = this.route.snapshot.params.id;
  }

  ngAfterViewInit() {
    let element = document.getElementById("username-field");
    if (element) {
      element.textContent = this.username;
    }
  }

  close() {
    this.router.navigateByUrl("/tabs/tab2");
  }

}
