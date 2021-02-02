import { TestBed } from '@angular/core/testing';

import { CoursefacultyService } from './coursefaculty.service';

describe('CoursefacultyService', () => {
  let service: CoursefacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursefacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
