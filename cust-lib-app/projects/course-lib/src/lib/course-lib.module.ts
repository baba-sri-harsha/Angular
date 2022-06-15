import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseLibComponent } from './course-lib.component';
import { CourseLibService } from './course-lib.service';
import { GreetComponent } from './greet/greet.component';

@NgModule({
  declarations: [CourseLibComponent, GreetComponent],
  imports: [CommonModule],
  exports: [CourseLibComponent, GreetComponent],
  providers: [CourseLibService],
})
export class CourseLibModule {}
