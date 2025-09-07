import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingCardsList } from './scrolling-cards-list';

describe('ScrollingCardsList', () => {
  let component: ScrollingCardsList;
  let fixture: ComponentFixture<ScrollingCardsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingCardsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingCardsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
