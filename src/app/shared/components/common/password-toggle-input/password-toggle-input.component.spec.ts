import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordToggleInputComponent } from './password-toggle-input.component';

describe('PasswordToggleInputComponent', () => {
  let component: PasswordToggleInputComponent;
  let fixture: ComponentFixture<PasswordToggleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordToggleInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordToggleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
