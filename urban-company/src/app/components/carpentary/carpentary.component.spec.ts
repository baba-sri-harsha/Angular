import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpentaryComponent } from './carpentary.component';

describe('CarpentaryComponent', () => {
  let component: CarpentaryComponent;
  let fixture: ComponentFixture<CarpentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
