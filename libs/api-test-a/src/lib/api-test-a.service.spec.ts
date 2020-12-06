import { TestBed } from '@angular/core/testing';

import { ApiTestAService } from './api-test-a.service';

describe('ApiTestAService', () => {
  let service: ApiTestAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTestAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
