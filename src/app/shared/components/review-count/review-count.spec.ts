import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewCount } from './review-count';

describe('ReviewCount', () => {
  let component: ReviewCount;
  let fixture: ComponentFixture<ReviewCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewCount],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
