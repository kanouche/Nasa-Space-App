import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream
=======
import { TimelinePage } from './timeline/timeline.page';
>>>>>>> Stashed changes


const routes: Routes = [
  {
<<<<<<< Updated upstream

=======
    path: '',
    component: TimelinePage
>>>>>>> Stashed changes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelinePageRoutingModule {}
