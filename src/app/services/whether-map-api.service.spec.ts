import { TestBed } from '@angular/core/testing';

import { WhetherMapApiService } from './whether-map-api.service';

describe('WhetherMapApiService', () => {
  let service: WhetherMapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhetherMapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
