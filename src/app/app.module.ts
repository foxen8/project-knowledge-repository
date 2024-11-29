import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import {  DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchProfileRoleComponent } from './search-profile-role/search-profile-role.component';  // Import BrowserAnimationsModule
import { TreeModule } from 'primeng/tree';
import { PositionFamilyComponent } from './position-family/position-family.component';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
import { CarouselModule } from 'primeng/carousel';
import { OutlineModalComponent } from './outline-modal/outline-modal.component';
import { DropdownModule } from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip';
import { KnowledgePageComponent } from './knowledge-page/knowledge-page.component';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { GeneralOutlinesComponent } from './general-outlines/general-outlines.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchProfileRoleComponent,
    PositionFamilyComponent,
    OutlineModalComponent,
    KnowledgePageComponent,
    GeneralOutlinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule, // PrimeNG Dialog
    InputTextModule, // PrimeNG InputText
    FormsModule,
    BrowserAnimationsModule  ,
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
    TableModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
