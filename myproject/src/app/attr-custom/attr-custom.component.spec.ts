import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrCustomComponent } from './attr-custom.component';

describe('AttrCustomComponent', () => {
  let component: AttrCustomComponent;
  let fixture: ComponentFixture<AttrCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
