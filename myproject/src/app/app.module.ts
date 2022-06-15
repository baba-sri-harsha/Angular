import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { InlineComponent } from './inline/inline.component';
import { StrDirectiveComponent } from './str-directive/str-directive.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { DirectivesDirective } from './directives.directive';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { AttrCustomComponent } from './attr-custom/attr-custom.component';
import { RenderHighlightDirective } from './directives/render-highlight.directive';
import { HostHighlightDirective } from './directives/host-highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NotIfDirective } from './directives/not-if.directive';
import { PipeComponent } from './pipe/pipe.component';
import { TitlePipe } from './pipes/title.pipe';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CourseParentComponent } from './course-parent/course-parent.component';
import { CourseChildComponent } from './course-child/course-child.component';
import { CourseMultiParentComponent } from './course-multi-parent/course-multi-parent.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    InlineComponent,
    StrDirectiveComponent,
    AttrDirectiveComponent,
    DirectivesDirective,
    BasicHighlightDirective,
    AttrCustomComponent,
    RenderHighlightDirective,
    HostHighlightDirective,
    ParentComponent,
    ChildComponent,
    NotIfDirective,
    PipeComponent,
    TitlePipe,
    ViewParentComponent,
    ViewChildComponent,
    FilterPipe,
    LifecycleComponent,
    CourseParentComponent,
    CourseChildComponent,
    CourseMultiParentComponent,
    TempFormComponent,
    ReactiveFormsComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
