import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLibComponent } from './course-lib.component';

describe('CourseLibComponent', () => {
  let component: CourseLibComponent;
  let fixture: ComponentFixture<CourseLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
