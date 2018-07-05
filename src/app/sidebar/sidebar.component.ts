import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  links = [
  ];
}

class Link {
  href: string;
  icon: string;
  text: string;

  constructor(href: string, icon: string, text: string) {
    this.href = href;
    this.icon = icon;
    this.text = text;
  }
}