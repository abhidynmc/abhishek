import { TestBed } from '@angular/core/testing';

import { LoginServices } from './login.service';

describe('LoginServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServices = TestBed.get(LoginServices);
    expect(service).toBeTruthy();
  });
});
