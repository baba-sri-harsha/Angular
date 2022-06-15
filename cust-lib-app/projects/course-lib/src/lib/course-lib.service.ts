import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../course';

@Injectable({
  providedIn: 'root',
})
export class CourseLibService implements OnInit {
  courses = [
    { courseName: 'java', cost: 200 },
    { courseName: 'html', cost: 500 },
    { courseName: 'css', cost: 400 },
  ];
  constructor() {}
  ngOnInit(): void {}

  getCourses = (): Observable<Course[]> => {
    return of(this.courses);
  };
}
