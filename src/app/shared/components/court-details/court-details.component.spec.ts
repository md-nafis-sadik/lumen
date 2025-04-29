import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtDetailsComponent } from './court-details.component';

describe('CourtDetailsComponent', () => {
  var component: CourtDetailsComponent;
  var fixture: ComponentFixture<CourtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
