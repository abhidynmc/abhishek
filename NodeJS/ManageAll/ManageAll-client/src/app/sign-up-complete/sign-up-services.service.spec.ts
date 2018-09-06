import { TestBed, inject } from '@angular/core/testing';

import { SignUpServices } from './sign-up-services.service';

describe('SignUpServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpServices]
    });
  });

  it('should be created', inject([SignUpServices], (service: SignUpServices) => {
    expect(service).toBeTruthy();
  }));
});
