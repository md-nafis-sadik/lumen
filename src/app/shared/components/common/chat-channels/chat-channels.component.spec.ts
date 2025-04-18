import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatChannelsComponent } from './chat-channels.component';

describe('ChatChannelsComponent', () => {
  let component: ChatChannelsComponent;
  let fixture: ComponentFixture<ChatChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatChannelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
