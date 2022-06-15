import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatctusComponent } from './conatctus.component';

describe('ConatctusComponent', () => {
  let component: ConatctusComponent;
  let fixture: ComponentFixture<ConatctusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConatctusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatctusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
