import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-child',
  templateUrl: './course-child.component.html',
  styleUrls: ['./course-child.component.css'],
})
export class CourseChildComponent implements OnInit {
  constructor() {}

  @Input() academyName = '';
  courseName = 'Angular';
  trainerName = 'baba';

  ngOnInit(): void {}
}
