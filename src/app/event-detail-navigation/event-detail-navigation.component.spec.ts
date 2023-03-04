import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailNavigationComponent } from './event-detail-navigation.component';

describe('EventDetailNavigationComponent', () => {
  let component: EventDetailNavigationComponent;
  let fixture: ComponentFixture<EventDetailNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
