import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtSelectionComponent } from './court-selection.component';

describe('CourtSelectionComponent', () => {
  var component: CourtSelectionComponent;
  var fixture: ComponentFixture<CourtSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourtSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
