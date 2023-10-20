import { TestBed } from '@angular/core/testing';

import { GMHISInsuredService } from './insured-service.service';

describe('InsuredServiceService', () => {
  let service: GMHISInsuredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GMHISInsuredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
