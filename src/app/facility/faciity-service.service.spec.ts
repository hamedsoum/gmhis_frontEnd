import { TestBed } from '@angular/core/testing';

import { FaciityService } from './faciity-service.service';

describe('FaciityServiceService', () => {
  let service: FaciityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaciityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
