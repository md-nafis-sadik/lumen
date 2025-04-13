import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuButtonComponent } from './submenu-button.component';

describe('SubmenuButtonComponent', () => {
  let component: SubmenuButtonComponent;
  let fixture: ComponentFixture<SubmenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
