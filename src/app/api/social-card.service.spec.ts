import { TestBed } from '@angular/core/testing';

import { SocialCardService } from './social-card.service';

describe('SocialCardService', () => {
  let service: SocialCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
