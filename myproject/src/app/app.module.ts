import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
