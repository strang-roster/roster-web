import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {
  MatGridListModule, MatCardModule, MatTableModule, MatInputModule,
  MatFormFieldModule, MatMenuModule, MatIconModule, MatButtonModule,
} from '@angular/material';

import { CampComponent } from './camp.component';

import { BaseComponent } from  './base/base.component';
import { CampDetailComponent } from  './camp-detail/camp-detail.component';
import { CampSelectorComponent } from  './camp-selector/camp-selector.component';
import { CampSessionsComponent } from './camp-sessions/camp-sessions.component';

export const CampRoutes: Routes = [
  {
    path: '',
    component: CampSelectorComponent,
  },
  {
    path: ':campId',
    component: CampDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    CampComponent,
    CampDetailComponent,
    CampSelectorComponent,
    CampSessionsComponent,
    BaseComponent,
  ],
})
export class CampModule { }
