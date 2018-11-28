import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Marathon } from 'src/app/shared/models/marathon';
import { MarathonService } from 'src/app/shared/services/marathon.service';

@Component({
  selector: 'app-marathons-list',
  templateUrl: './marathons-list.component.html',
  styleUrls: ['./marathons-list.component.scss']
})
export class MarathonsListComponent implements OnInit {

  marathons: Marathon[];

  constructor(
    private marathonService: MarathonService
  ) {}

  ngOnInit() {
    this.marathonService.get()
      .subscribe(marathons => {
        this.marathons = marathons;
      })
  }

  create() {
    let marathon = {
      name: 'Marathon 2018',
      shortname: 'marathon2018',
      description: 'Lorem ipsum dolor net.'
    }
    this.marathonService.create(marathon).then((done) => {
      console.log(done);
    });
  }

}
