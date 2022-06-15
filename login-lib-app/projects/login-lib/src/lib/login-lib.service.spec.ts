import { TestBed } from '@angular/core/testing';

import { LoginLibService } from './login-lib.service';

describe('LoginLibService', () => {
  let service: LoginLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
