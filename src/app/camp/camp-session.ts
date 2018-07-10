import { CampSeason } from './camp-season';

export enum SessionType {
  BoyScoutResident = 1,
  CubScoutResident = 2,
}

export class CampSession {
  campSeason: CampSeason;
  type: SessionType;
  number: number;
  startDate: Date;
  endDate: Date;

  constructor(campSeason: CampSeason, type: SessionType, number: number,
              startDate: Date, endDate: Date) {
    this.campSeason = campSeason;
    this.type = type;
    this.number = number;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
