import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarathonsDetailComponent } from './marathons/marathons-detail/marathons-detail.component';
import { MarathonsListComponent } from './marathons/marathons-list/marathons-list.component';
import { ProjectsCreateComponent } from './projects/projects-create/projects-create.component';

const routes: Routes = [
  { path: ':marathonShortname', component: MarathonsDetailComponent },
  { path: 'projetos/criar', component: ProjectsCreateComponent },
  { path: '', component: MarathonsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
