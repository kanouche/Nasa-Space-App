import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TimelinePage } from './timeline/timeline.page';
import { TimelinePageRoutingModule } from './timeline-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelinePageRoutingModule
  ],
  declarations: [TimelinePage]
})
export class TimelinePageModule {}
