import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import {  DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchProfileRoleComponent } from './pages/search-profile-role/search-profile-role.component';  // Import BrowserAnimationsModule
import { TreeModule } from 'primeng/tree';
import { PositionFamilyComponent } from './pages/position-family/position-family.component';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
import { CarouselModule } from 'primeng/carousel';
import { OutlineModalComponent } from './modals/outline-modal/outline-modal.component';
import { DropdownModule } from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip';
import { KnowledgePageComponent } from './pages/knowledge-page/knowledge-page.component';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { GeneralOutlinesComponent } from './pages/general-outlines/general-outlines.component';
import { TableModule } from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { GeneralOutlinesManagementComponent } from './pages/general-outlines-management/general-outlines-management.component';
import { UserManagementTableComponent } from './components/tables/user-management-table/user-management-table.component';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import {CheckboxModule} from 'primeng/checkbox';
import { UserFormComponent } from './modals/user-modal/user-modal.component';
import { MessageModule } from 'primeng/message';
import { DeleteWarningComponent } from './modals/delete-warning/delete-warning.component';
import { GeneralOutlinesTableComponent } from './components/tables/general-outlines-table/general-outlines-table.component';
import { GeneralOutlinesModalComponent } from './modals/general-outlines-modal/general-outlines-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditModalComponent } from './components/add-edit-modal/add-edit-modal.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchProfileRoleComponent,
    PositionFamilyComponent,
    OutlineModalComponent,
    KnowledgePageComponent,
    GeneralOutlinesComponent,
    UsersManagementComponent,
    GeneralOutlinesManagementComponent,
    UserManagementTableComponent,
    AppLoaderComponent,
    UserFormComponent,
    DeleteWarningComponent,
    GeneralOutlinesTableComponent,
    GeneralOutlinesModalComponent,
    AddEditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    TreeModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    DividerModule,
    ChipsModule,
    CarouselModule,
    DropdownModule,
    ChipModule,
    TooltipModule,
    AccordionModule,
    TableModule,
    MenuModule,
    CheckboxModule,
    MessageModule,
    ReactiveFormsModule,
    HttpClientModule,
    RadioButtonModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
