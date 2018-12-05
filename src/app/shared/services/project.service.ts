import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects$: AngularFireList<Project>;

  constructor(private db: AngularFireDatabase) {
    this.projects$ = this.db.list('projects');
  }

  getByID(id: string) {
    return this.db.object<Project>('projects/' + id).valueChanges();
  }

  getByMarathon(shortname: string) {
    return this.db.list<Project>('projects', ref => ref.orderByChild('marathon').equalTo(shortname)).valueChanges();
  }

  create(project: Project): Promise<boolean> {
    // Add reference to marathon
    project.marathon = 'marathon2018';
    return new Promise((resolve, reject) => {
      this.projects$.set(project.name, project);
      resolve(true);
    });
  }
}
