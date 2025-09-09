import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionsCard } from './collections-card';

describe('CollectionsCard', () => {
  let component: CollectionsCard;
  let fixture: ComponentFixture<CollectionsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
