import { Routes } from '@angular/router';
import { Skills } from './skills-page/skills';
import { ExperiencePage } from './experience-page/experience-page';
import { ProjectsPage } from './projects-page/projects-page';

export const routes: Routes = [
  { path: 'skills', component: Skills },
  { path: 'experience', component: ExperiencePage },
  { path: 'projects', component: ProjectsPage },
];
