import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Marathon } from '../models/marathon';

@Injectable()
export class MarathonService {

  marathons$: AngularFireList<Marathon>

  constructor(private db: AngularFireDatabase) {
    this.marathons$ = this.db.list('marathons');
  }

  get() {
    return this.db.list<Marathon>('marathons').valueChanges();
  }

  create(marathon: Marathon): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.marathons$.push(marathon);
      resolve(true);
    });
  }
}
