import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarathonsDetailComponent } from './marathons/marathons-detail/marathons-detail.component';
import { MarathonsListComponent } from './marathons/marathons-list/marathons-list.component';

const routes: Routes = [
  { path: ':marathonShortname', component: MarathonsDetailComponent },
  { path: '', component: MarathonsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
