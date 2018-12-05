import { Component, OnInit } from '@angular/core';

import { Marathon } from 'src/app/shared/models/marathon';
import { MarathonService } from 'src/app/shared/services/marathon.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-marathons-detail',
  templateUrl: './marathons-detail.component.html',
  styleUrls: ['./marathons-detail.component.scss']
})
export class MarathonsDetailComponent implements OnInit {

  marathon: Marathon;
  projects: Project[];

  constructor(
    private marathonService: MarathonService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.marathonService.getByShortname('marathon2018')
      .subscribe(marathon => {
        this.marathon = marathon;
        this.projectService.getByMarathon('marathon2018').subscribe(projects => {
          this.projects = projects;
        })
      })
  }

}
