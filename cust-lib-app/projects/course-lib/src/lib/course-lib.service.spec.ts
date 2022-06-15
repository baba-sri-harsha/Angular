import { TestBed } from '@angular/core/testing';

import { CourseLibService } from './course-lib.service';

describe('CourseLibService', () => {
  let service: CourseLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
