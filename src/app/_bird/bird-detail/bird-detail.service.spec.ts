import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BirdDetailService } from './bird-detail.service';

describe('BirdDetailService', () => {
  let service: BirdDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(BirdDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
