import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBadgeComponent } from './assign-badge.component';

describe('AssignBadgeComponent', () => {
  let component: AssignBadgeComponent;
  let fixture: ComponentFixture<AssignBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
