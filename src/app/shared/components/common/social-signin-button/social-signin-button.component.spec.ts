import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSigninButtonComponent } from './social-signin-button.component';

describe('SocialSigninButtonComponent', () => {
  let component: SocialSigninButtonComponent;
  let fixture: ComponentFixture<SocialSigninButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialSigninButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialSigninButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
