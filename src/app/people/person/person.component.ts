import { Component, OnInit } from '@angular/core';

import { Member, UnitMembership, Role } from '../member.class';
import { Troop, Crew } from '../unit.class';


@Component({
  selector: 'people-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Member = new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG");

  constructor() { }

  ngOnInit() {
    const troop1 = new Troop(1, "Oxford");
    const crew555 = new Crew(555, "Goshen");
    this.person.addMembership(
      new UnitMembership(troop1, Role.Leader, this.person));
    this.person.addMembership(
      new UnitMembership(crew555, Role.Youth, this.person));
  }
}
