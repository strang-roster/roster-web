import { Component, OnInit } from '@angular/core';

import { camelCaseToUpperCaseSpaced } from '../../string-conversion';

import { Camp } from '../camp';
import { CampSeason } from '../camp-season';
import { CampSession, SessionType } from '../camp-session';

@Component({
  selector: 'camp-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  camp: Camp = new Camp('Edmund D. Strang Scout Reservation');

  displayedColumns: string[] = ["number", "type", "startDate", "endDate"];
  campSessions: CampSession[];

  constructor() {
    const campSeason = new CampSeason(this.camp, 2018);
    this.campSessions = [
      new CampSession(
        campSeason, SessionType.BoyScoutResident, 1,
        new Date(2018, 6, 8), new Date(2018, 6, 14)),
      new CampSession(
        campSeason, SessionType.BoyScoutResident, 2,
        new Date(2018, 6, 15), new Date(2018, 6, 21)),
      new CampSession(
        campSeason, SessionType.BoyScoutResident, 3,
        new Date(2018, 6, 22), new Date(2018, 6, 28)),
      new CampSession(
        campSeason, SessionType.BoyScoutResident, 4,
        new Date(2018, 6, 29), new Date(2018, 7, 4)),
    ];
  }

  ngOnInit() {
  }

  sessionType(type: SessionType) {
    return camelCaseToUpperCaseSpaced(SessionType[type]);
  }

}
