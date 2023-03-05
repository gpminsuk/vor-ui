import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddBadgeInfoComponent } from './event-add-badge-info.component';

describe('EventAddBadgeInfoComponent', () => {
  let component: EventAddBadgeInfoComponent;
  let fixture: ComponentFixture<EventAddBadgeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAddBadgeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAddBadgeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
