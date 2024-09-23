import { TestBed } from '@angular/core/testing';

import { WardListService } from './ward-list.service';

describe('WardListService', () => {
  let service: WardListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
