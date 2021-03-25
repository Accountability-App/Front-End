import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  exists = true;
  username: string;

  ngOnInit() {
    this.username = this.route.snapshot.params.id;
    console.log(this.username);
  }

  ngAfterViewInit() {
    let element = document.getElementById("name-field");
    if (element) {
      element.textContent = this.username;
    }
    else {
      console.log("fail");
    }
  }

  close() {
    this.router.navigateByUrl("/tabs/tab2");
  }

}
