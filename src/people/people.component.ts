import { Component } from '@angular/core';

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

export class Member {
  firstName: string;
  lastName: string;
  units: Unit[];

  constructor(firstName: string, lastName: string, units: Unit[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.units = units;
  }

  unitsString = () : string => {
    return this.units.join(', ');
  }
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'units'];
  dataSource: Member[] = [
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
    new Member('John', 'Doe', [new Troop(1, "Oxford"), new Crew(555, "Goshen")]),
  ];

  navigateToPerson(person: Member) {
    console.log(person);
  }
}
