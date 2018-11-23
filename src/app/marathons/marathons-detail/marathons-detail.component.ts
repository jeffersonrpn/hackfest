import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-marathons-detail',
  templateUrl: './marathons-detail.component.html',
  styleUrls: ['./marathons-detail.component.scss']
})
export class MarathonsDetailComponent implements OnInit {

  marathon: Observable<any>;

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    const shortname = 'jampa2018'
    this.marathon = this.firestore
      .collection('marathons', ref => ref
        .where('shortname', '==', shortname))
        .valueChanges();
  }

}
