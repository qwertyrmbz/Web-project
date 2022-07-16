import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { SubtopicDetailsComponent } from './subtopic-details/subtopic-details.component';
import { ExplorerComponent } from './explorer/explorer.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sections/:sectionId/editor', component: EditorComponent },
  { path: 'topics/:topicId/edit', component: TopicDetailsComponent },
  { path: 'subtopics/:subtopicId/edit', component: SubtopicDetailsComponent },
  { path: 'sections/:sectionId/explorer', component: ExplorerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
