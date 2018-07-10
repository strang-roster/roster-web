import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {
  MatGridListModule, MatCardModule, MatTableModule, MatInputModule,
  MatFormFieldModule, MatMenuModule, MatIconModule, MatButtonModule,
} from '@angular/material';

import { CampComponent } from './camp.component';
import { OverviewComponent } from  './overview/overview.component';

export const CampRoutes: Routes = [
  { path: '', component: OverviewComponent },
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
    OverviewComponent,
  ],
})
export class CampModule { }
