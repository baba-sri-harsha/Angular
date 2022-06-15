import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLibComponent } from './login-lib.component';

describe('LoginLibComponent', () => {
  let component: LoginLibComponent;
  let fixture: ComponentFixture<LoginLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
