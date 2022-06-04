import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirectiveComponent } from './attr-directive.component';

describe('AttrDirectiveComponent', () => {
  let component: AttrDirectiveComponent;
  let fixture: ComponentFixture<AttrDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
