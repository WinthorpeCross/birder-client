import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ObservationCrudService } from './observation-crud.service';

describe('ObservationCrudService', () => {
  let service: ObservationCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ObservationCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
