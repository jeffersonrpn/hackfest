import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects$: AngularFireList<Project>

  constructor(private db: AngularFireDatabase) {
    this.projects$ = this.db.list('projects');
  }

  getByID(id: string) {
    return this.db.object<Project>('projects/' + id).valueChanges();
  }

  create(project: Project): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.projects$.set(project.name, project);
      resolve(true);
    });
  }
}
