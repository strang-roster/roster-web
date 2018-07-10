import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSessionsComponent } from './camp-sessions.component';

describe('CampSessionsComponent', () => {
  let component: CampSessionsComponent;
  let fixture: ComponentFixture<CampSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
