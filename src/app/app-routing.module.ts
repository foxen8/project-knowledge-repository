import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Default route for the main content
  // { path: 'role-search', component: RoleSearchComponent },
  // { path: 'knowledge', component: KnowledgeComponent },
  // { path: 'position-summary', component: PositionSummaryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
