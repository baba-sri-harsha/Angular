import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairstylistComponent } from './hairstylist.component';

describe('HairstylistComponent', () => {
  let component: HairstylistComponent;
  let fixture: ComponentFixture<HairstylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairstylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairstylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
