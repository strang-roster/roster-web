import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import {
  MatGridListModule, MatCardModule, MatTableModule, MatInputModule,
  MatFormFieldModule, MatMenuModule, MatIconModule, MatButtonModule,
} from '@angular/material';

import { PeopleComponent } from './people.component';
import { ListComponent } from './list/list.component';
import { PersonComponent } from './person/person.component';

export const PeopleRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: ':personId', component: PersonComponent },
];

@NgModule({
  declarations: [
    PeopleComponent,
    ListComponent,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PeopleModule { }
