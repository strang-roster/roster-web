import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatTableModule,
} from '@angular/material';

import { PeopleModule, PeopleRoutes } from './people/people.module';
import { PeopleComponent } from './people/people.component';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { HeaderComponent } from './header/header.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

const appRoutes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  {
    path: 'people',
    component: PeopleComponent,
    children: PeopleRoutes,
  },
  { path: 'scheduling', component: SchedulingComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentWrapperComponent,
    HeaderComponent,
    DashboardComponent,
    SchedulingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,

    PeopleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }