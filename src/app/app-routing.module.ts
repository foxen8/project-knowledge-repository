import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchProfileRoleComponent } from './search-profile-role/search-profile-role.component';
import { PositionFamilyComponent } from './position-family/position-family.component';
import { KnowledgePageComponent } from './knowledge-page/knowledge-page.component';
import { GeneralOutlinesComponent } from './general-outlines/general-outlines.component';
import { GeneralOutlinesManagementComponent } from './general-outlines-management/general-outlines-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Default route for the main content
  { path: 'role-search', component: SearchProfileRoleComponent },
  { path: 'position-family', component: PositionFamilyComponent },
  { path: 'knowledge', component: KnowledgePageComponent },
  { path: 'general-outlines', component: GeneralOutlinesComponent },
  { path: 'general-outlines-management', component: GeneralOutlinesManagementComponent },
  { path: 'users-management', component: UsersManagementComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
