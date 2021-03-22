import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { BuddiesPopoverComponent } from "../buddies-popover/buddies-popover.component"
import { BuddiesModalComponent } from "../buddies-modal/buddies-modal.component"

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
  ],
  entryComponents: [BuddiesPopoverComponent, BuddiesModalComponent],
  declarations: [Tab2Page, BuddiesPopoverComponent, BuddiesModalComponent]
})
export class Tab2PageModule {}
