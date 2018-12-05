import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

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
    private formBuilder: FormBuilder
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
    console.warn(this.projectForm.value);
  }

}
