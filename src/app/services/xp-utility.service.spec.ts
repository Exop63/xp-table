import { TestBed } from '@angular/core/testing';

import { XpUtilityService } from './xp-utility.service';

describe('XpUtilityService', () => {
  let service: XpUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XpUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
