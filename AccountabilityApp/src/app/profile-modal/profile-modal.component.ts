import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { Tab5Page } from '../tab5/tab5.page';


@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  profileData: any;
  username: string;

  constructor(public modalController: ModalController, private _http: HttpService, public alertCtrl: AlertController, public tab5page: Tab5Page) { }

  ngOnInit() {
    this.username = "ArchDruid"
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  async save(event) {
    console.log("Saving...");

    //console.log(this.description); //not working with [(ngModel)]
    var new_description = (document.getElementById("description") as HTMLTextAreaElement).value;

    //TODO: input sanitization
    if(new_description != ''){
      console.log(new_description);
      console.log(this.username);
      this._http.saveDescription(this.username, new_description)
      .subscribe(responseData => {
             console.log(responseData);
           });
      console.log("Changed description.");
      this.tab5page.reloadPage(); //Had to refresh page to get update to show, I tried other stuff but couldn't get it to update without reloading page
    }

    /* Uncomment if saving username and password to database through edit profile
    var new_username = (document.getElementById("username") as HTMLTextAreaElement).value;
    var new_password = (document.getElementById("password") as HTMLTextAreaElement).value;

    //needs unique username so, if it return false, output something to let them know it didn't work
    if(new_username != ''){
      console.log(new_username);
      var unique = this._http.saveUsername(this.username, new_username) //will return BOOL
      if(!unique){
        console.log("New username was not unique, please try a different username")
        this.presentAlert()
      }
      else{
        console.log("Changed username.")
        //post password
        if(new_password != ''){
          console.log(new_password);
          this._http.savePassword(this.username, new_password)
          console.log("Changed password.")
        }
      }
      
    }

    else if(new_password != ''){
      console.log(new_password);
      this._http.savePassword(this.username, new_password)
      console.log("Changed password.")
    }
    Uncomment if saving username and password to database through edit profile */

    console.log("Done.");
    this.dismiss();
  }



  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Didn't Change Your Username Or Password",
      message: 'The new username you entered was not unique, please try a different username. Your username and password were both not changed.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
