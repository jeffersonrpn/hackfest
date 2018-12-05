import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { Project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-projects-create',
  templateUrl: './projects-create.component.html',
  styleUrls: ['./projects-create.component.scss']
})
export class ProjectsCreateComponent {

  projectForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    githubURL: [''],
    websiteURL: [''],
    team: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projectService: ProjectService
  ) { }

  get team() {
    return this.projectForm.get('team') as FormArray;
  }

  addMember() {
    this.team.push(this.formBuilder.control(''));
  }

  removeMember(index) {
    this.team.removeAt(index);
  }

  onSubmit() {
    this.projectService.create(this.projectForm.value as Project).then(done => {
      if (done) {
        this.router.navigate(['/']);
      }
    });
  }

}
