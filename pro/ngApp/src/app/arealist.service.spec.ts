import { TestBed } from '@angular/core/testing';

import { ArealistService } from './arealist.service';

describe('ArealistService', () => {
  let service: ArealistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArealistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
