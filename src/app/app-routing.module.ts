import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchProfileRoleComponent } from './search-profile-role/search-profile-role.component';
import { PositionFamilyComponent } from './position-family/position-family.component';
import { KnowledgePageComponent } from './knowledge-page/knowledge-page.component';
import { GeneralOutlinesComponent } from './general-outlines/general-outlines.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Default route for the main content
  { path: 'role-search', component: SearchProfileRoleComponent },
  { path: 'position-family', component: PositionFamilyComponent },
  { path: 'knowledge', component: KnowledgePageComponent },
  { path: 'general-outlines', component: GeneralOutlinesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
