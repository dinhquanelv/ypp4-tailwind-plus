import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingCardsCard } from './scrolling-cards-card';

describe('ScrollingCardsCard', () => {
  let component: ScrollingCardsCard;
  let fixture: ComponentFixture<ScrollingCardsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingCardsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingCardsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
