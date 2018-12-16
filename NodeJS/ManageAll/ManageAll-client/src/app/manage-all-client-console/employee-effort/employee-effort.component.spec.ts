import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEffortComponent } from './employee-effort.component';

describe('EmployeeEffortComponent', () => {
  let component: EmployeeEffortComponent;
  let fixture: ComponentFixture<EmployeeEffortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEffortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEffortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
