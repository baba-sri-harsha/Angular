import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CourseChildComponent } from '../course-child/course-child.component';

@Component({
  selector: 'app-course-parent',
  templateUrl: './course-parent.component.html',
  styleUrls: ['./course-parent.component.css'],
})
export class CourseParentComponent implements OnInit, AfterViewChecked {
  @ViewChild(CourseChildComponent) childRef!: CourseChildComponent;

  //get the ref of header tag
  @ViewChild('headerOne') header!: ElementRef;
  constructor() {}

  academyName = 'tech labs';
  course = '';
  trainer = '';

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.course = this.childRef.courseName;
    console.log(`child data ${this.childRef.courseName}`);
    this.header.nativeElement.style.color = 'orange';
    this.trainer = this.childRef.trainerName;
  }

  ngAfterViewChecked(): void {
    this.course = this.childRef.courseName;
    console.log(`child data ${this.childRef.courseName}`);
    this.header.nativeElement.style.color = 'orange';
    this.trainer = this.childRef.trainerName;
  }
}
