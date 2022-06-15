import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMultiParentComponent } from './course-multi-parent.component';

describe('CourseMultiParentComponent', () => {
  let component: CourseMultiParentComponent;
  let fixture: ComponentFixture<CourseMultiParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseMultiParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMultiParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
