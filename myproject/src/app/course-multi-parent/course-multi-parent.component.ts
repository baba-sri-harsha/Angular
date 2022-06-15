import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CourseChildComponent } from '../course-child/course-child.component';

@Component({
  selector: 'app-course-multi-parent',
  templateUrl: './course-multi-parent.component.html',
  styleUrls: ['./course-multi-parent.component.css'],
})
export class CourseMultiParentComponent implements OnInit, AfterViewInit {
  constructor() {}

  // to get the reference of all the child compoenentsb
  //QueryList means list of components
  @ViewChildren(CourseChildComponent)
  childrenRef!: QueryList<CourseChildComponent>;

  childArray: CourseChildComponent[] = [];
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.childrenRef.toArray().forEach((component: CourseChildComponent) => {
      console.log(component.academyName);
      console.log(component.courseName);
    });
    this.childArray = this.childrenRef.toArray();
  }
}
