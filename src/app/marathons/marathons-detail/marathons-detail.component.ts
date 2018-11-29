import { Component, OnInit } from '@angular/core';

import { Marathon } from 'src/app/shared/models/marathon';
import { MarathonService } from 'src/app/shared/services/marathon.service';

@Component({
  selector: 'app-marathons-detail',
  templateUrl: './marathons-detail.component.html',
  styleUrls: ['./marathons-detail.component.scss']
})
export class MarathonsDetailComponent implements OnInit {

  marathon: Marathon;

  constructor(
    private marathonService: MarathonService
  ) { }

  ngOnInit() {
    this.marathonService.getByShortname('marathon2018')
      .subscribe(marathon => {
        this.marathon = marathon;
      })
  }

}
