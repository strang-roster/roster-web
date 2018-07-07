export interface Unit {
  number: number;
  hometown: string;

  toString(): string;
}

export class Troop implements Unit {
  number: number;
  hometown: string;

  constructor(number: number, hometown: string) {
    this.number = number;
    this.hometown = hometown;
  }

  toString = () : string => {
    return `Troop ${this.number} (${this.hometown})`;
  }
}

export class Crew implements Unit {
  number: number;
  hometown: string;

  constructor(number: number, hometown: string) {
    this.number = number;
    this.hometown = hometown;
  }

  toString = () : string => {
    return `Crew ${this.number} (${this.hometown})`;
  }
}
