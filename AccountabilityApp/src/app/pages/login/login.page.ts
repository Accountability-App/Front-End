import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

import { AuthenticationService } from './../../services/authentication.service';

export interface UserAccount {
    userID: string;
    username: string;
    givenName: string;
    familyName: string;
    email: string;
    friends: Array<string>;
    tasks: Array<number>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage {
  userInfo = null;

  account: UserAccount = {
    userID: '',
    username: '',
    givenName: '',
    familyName: '',
    email: '',
    friends: null,
    tasks: null
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {}


  async googleSignup() {
    this.userInfo = await Plugins.GoogleAuth.signIn() as any;
    this.add_info();
    this.authService.loadGoogleToken(this.userInfo.authentication.idToken);
    console.log('user info: ', this.userInfo);
    console.log('account info:', this.account);
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }

  add_info() {
    this.account.userID = this.userInfo.authentication.itToken;
    this.account.givenName = this.userInfo.givenName;
    this.account.familyName = this.userInfo.familyName;
    this.account.email = this.userInfo.email;
  }
}
