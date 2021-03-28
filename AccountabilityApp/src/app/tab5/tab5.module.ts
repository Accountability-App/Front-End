import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab5Page } from './tab5.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ProfilePopoverComponent } from "../profile-popover/profile-popover.component";

import { Tab5PageRoutingModule } from './tab5-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }]),
    Tab5PageRoutingModule,
  ],
  entryComponents: [ProfilePopoverComponent],
  declarations: [Tab5Page, ProfilePopoverComponent]
})
export class Tab5PageModule {}


