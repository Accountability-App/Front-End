import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { RepeatSelectorComponent } from '../repeat-selector/repeat-selector.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([
      {
        path: '', 
        component: Tab3Page 
      }
    ]),
    Tab3PageRoutingModule,
    // RepeatSelectorComponent,
  ],
  declarations: [Tab3Page, RepeatSelectorComponent],
  // declarations: [Tab3Page],

  entryComponents: [RepeatSelectorComponent], 

  exports: [RepeatSelectorComponent],
})
export class Tab3PageModule {}
