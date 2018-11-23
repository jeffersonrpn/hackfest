import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-marathons-list',
  templateUrl: './marathons-list.component.html',
  styleUrls: ['./marathons-list.component.scss']
})
export class MarathonsListComponent implements OnInit {

  marathons: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.marathons = this.firestore.collection('marathons').valueChanges();
  }

}
