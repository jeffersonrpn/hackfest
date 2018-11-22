import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService]
})
export class CoreModule { }
