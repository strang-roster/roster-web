import { Camp } from './camp';

export class CampSeason {
  camp: Camp;
  year: number;

  constructor(camp: Camp, year: number) {
    this.camp = camp;
    this.year = year;
  }
}
