import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatTableModule,
} from '@angular/material';

import { PeopleComponent } from './people.component';

@NgModule({
  declarations: [
    PeopleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: []
})
export class PeopleModule { }
