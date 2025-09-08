import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it('should render title', () => {
    component.title = 'My Title';
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('My Title');
  });

  it('should render description', () => {
    component.description = 'This is a test description';
    fixture.detectChanges();
    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(p.textContent).toContain('This is a test description');
  });

  it('should render image with correct src and alt', () => {
    component.imageUrl = '/assets/test.jpg';
    component.title = 'Alt Text';
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('/assets/test.jpg');
    expect(img.alt).toBe('Alt Text');
  });

  it('should have link with title text', () => {
    component.title = 'Go somewhere';
    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(link.textContent).toContain('Go somewhere');
    expect(link.getAttribute('href')).toBe('#');
  });
});
