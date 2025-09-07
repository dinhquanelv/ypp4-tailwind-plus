import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionsList } from './collections-list';

describe('CollectionsListList', () => {
  let component: CollectionsList;
  let fixture: ComponentFixture<CollectionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsList],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
