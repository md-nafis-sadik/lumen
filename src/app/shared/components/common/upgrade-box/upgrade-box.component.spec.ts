import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeBoxComponent } from './upgrade-box.component';

describe('UpgradeBoxComponent', () => {
  let component: UpgradeBoxComponent;
  let fixture: ComponentFixture<UpgradeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
