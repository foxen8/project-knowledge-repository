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


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchProfileRoleComponent,
    PositionFamilyComponent,
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
    ChipsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
