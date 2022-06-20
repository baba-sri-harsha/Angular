import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayingGuestListComponent } from './paying-guest-list.component';

describe('PayingGuestListComponent', () => {
  let component: PayingGuestListComponent;
  let fixture: ComponentFixture<PayingGuestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayingGuestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayingGuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
