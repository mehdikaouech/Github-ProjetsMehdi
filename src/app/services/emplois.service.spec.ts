import { TestBed } from '@angular/core/testing';

import { EmploisService } from './emplois.service';

describe('EmploisService', () => {
  let service: EmploisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
