import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Member, UnitMembership, Role } from '../member.class';
import { Troop, Crew } from '../unit.class';

@Component({
  selector: 'app-people-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  displayedColumns: string[] = [
    'profileImage',
    'firstName',
    'lastName',
    'units',
  ];

  dataSource: Member[] = [
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
    new Member(1, 'John', 'Doe', "/assets/wschmitt.JPG"),
  ];

  navigateToPerson(person: Member) {
    this.router.navigate([person.id], {relativeTo: this.route});
  }

  ngOnInit() {
    const troop1 = new Troop(1, "Oxford");
    const crew555 = new Crew(555, "Goshen");
    for (let member of this.dataSource) {
      member.addMembership(new UnitMembership(troop1, Role.Leader, member));
      member.addMembership(new UnitMembership(crew555, Role.Youth, member));
    }
  }
}
