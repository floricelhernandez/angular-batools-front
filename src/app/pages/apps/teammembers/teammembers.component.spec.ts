import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammembersComponent } from './teammembers.component';

describe('TeammemberComponent', () => {
  let component: TeammembersComponent;
  let fixture: ComponentFixture<TeammembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
