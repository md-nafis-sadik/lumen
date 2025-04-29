import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './signupform.component';

describe('SignUpFormComponent', () => {
  var component: SignUpFormComponent;
  var fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
