import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentLoggingComponent } from './incident-logging.component';

describe('IncidentLoggingComponent', () => {
  let component: IncidentLoggingComponent;
  let fixture: ComponentFixture<IncidentLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
