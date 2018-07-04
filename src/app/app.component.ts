import { Component, ViewChild } from '@angular/core';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('contentWrapper') contentWrapper: ContentWrapperComponent;

  // Preserves this when passing toggleSidenav as callback.
  toggleSidenav = () => {
    this.contentWrapper.toggleSidenav();
  }
}
