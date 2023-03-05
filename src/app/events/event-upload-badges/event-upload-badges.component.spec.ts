import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUploadBadgesComponent } from './event-upload-badges.component';

describe('EventUploadBadgesComponent', () => {
  let component: EventUploadBadgesComponent;
  let fixture: ComponentFixture<EventUploadBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventUploadBadgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventUploadBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
