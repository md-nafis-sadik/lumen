import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordToggleInputComponent } from './password-toggle-input.component';

describe('PasswordToggleInputComponent', () => {
  var component: PasswordToggleInputComponent;
  var fixture: ComponentFixture<PasswordToggleInputComponent>;

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
