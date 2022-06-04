import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrDirectiveComponent } from './str-directive.component';

describe('StrDirectiveComponent', () => {
  let component: StrDirectiveComponent;
  let fixture: ComponentFixture<StrDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
