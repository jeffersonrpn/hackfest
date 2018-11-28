import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { MarathonsDetailComponent } from './marathons/marathons-detail/marathons-detail.component';
import { MarathonsListComponent } from './marathons/marathons-list/marathons-list.component';
import { MarathonService } from './shared/services/marathon.service';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ProjectsListComponent,
    MarathonsDetailComponent,
    MarathonsListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [MarathonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
