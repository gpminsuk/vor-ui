import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFinalizeBadgeInfoComponent } from './event-finalize-badge-info.component';

describe('EventFinalizeBadgeInfoComponent', () => {
  let component: EventFinalizeBadgeInfoComponent;
  let fixture: ComponentFixture<EventFinalizeBadgeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFinalizeBadgeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFinalizeBadgeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
