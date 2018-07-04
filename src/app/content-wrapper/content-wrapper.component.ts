import { Component, ViewChild, ElementRef } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
