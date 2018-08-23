import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCompleteComponent } from './sign-up-complete.component';

describe('SignUpCompleteComponent', () => {
  let component: SignUpCompleteComponent;
  let fixture: ComponentFixture<SignUpCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
