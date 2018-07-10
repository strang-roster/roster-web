import { Component, OnInit } from '@angular/core';

import { Camp } from '../camp';

@Component({
  selector: 'camp-selector',
  templateUrl: './camp-selector.component.html',
  styleUrls: ['./camp-selector.component.css']
})
export class CampSelectorComponent implements OnInit {
  camp: Camp = new Camp('Edmund D. Strang Scout Reservation');

  constructor() {
  }

  ngOnInit() {
  }

}
