import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSidebarComponent } from './welcome-sidebar.component';

describe('WelcomeSidebarComponent', () => {
  let component: WelcomeSidebarComponent;
  let fixture: ComponentFixture<WelcomeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
