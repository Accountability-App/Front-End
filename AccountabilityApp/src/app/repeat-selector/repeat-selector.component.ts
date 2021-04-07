import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-repeat-selector',
  templateUrl: './repeat-selector.component.html',
  styleUrls: ['./repeat-selector.component.scss'],
})
export class RepeatSelectorComponent implements OnInit{

  //vars to send
  @Input('repeatFlag') repeatFlag: boolean;
  @Input('repeatDays') repeatDays: [string];
  @Input('repeatEndDate') repeatEndDate: Date;

  // pickedDays: [string] = ["empty"];
  // pickedEndTime: any = null;

  constructor(public modalController: ModalController) { }


  async closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    // alert(this.pickedEndTime)
    // alert(this.pickedDays)
    await this.modalController.dismiss({ repeatData: [this.repeatFlag, this.repeatDays, this.repeatEndDate] });
  }

  save()
  {
    this.repeatCancel=false
    this.repeatFlag=true
    this.closeModal()
  }

  cancelled()
  {
    this.repeatCancel=true
    this.repeatFlag=false
    this.closeModal()
  }

  ngOnInit() {}

  //vars
  public repeatCancel: boolean = false
  public weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  public date: string = new Date().toISOString();
  public time: any = new Date().getTime();
  public currYear: string = new Date().toLocaleDateString();
  public maxDate : any = (new Date()).getFullYear() + 2;

}
