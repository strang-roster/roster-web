import { Unit } from './unit.class';

export enum Role {
  Leader,
  Youth,
}

export class UnitMembership {
  unit: Unit;
  role: Role;
  member: Member;

  constructor(unit: Unit, role: Role, member: Member) {
    this.unit = unit;
    this.role = role;
    this.member = member;
  }
}

export class Member {
  public id: number;
  public firstName: string;
  public lastName: string;
  public memberships: UnitMembership[];
  public profileImage: string;

  constructor(id: number, firstName: string, lastName: string,
              profileImage: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.memberships = [];
    this.profileImage = profileImage;
  }

  addMembership(unitMembership: UnitMembership) {
    this.memberships.push(unitMembership);
  }

  unitsString = () : string => {
    return this.memberships.map((membership: UnitMembership) => {
      return membership.unit;
    }).join(', ');
  }

  roleString = () : string => {
    return this.memberships.map((membership: UnitMembership) => {
      return `${Role[membership.role]}, ${membership.unit}`;
    }).join('; ');
  }

  fullName = () : string => {
    return `${this.lastName}, ${this.firstName}`;
  }
}
