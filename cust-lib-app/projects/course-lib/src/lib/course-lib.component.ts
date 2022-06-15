import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Course } from '../course';
import { CourseLibService } from './course-lib.service';

@Component({
  selector: 'lib-course-lib',
  template: `
    <ul>
      <li *ngFor="let course of courses">
        {{ course.courseName }}
      </li>
    </ul>
  `,
  styles: [],
})
export class CourseLibComponent implements OnInit {
  courses: Course[] = [];
  constructor(private _libService: CourseLibService) {}

  ngOnInit(): void {
    this._libService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
    });
  }
}
