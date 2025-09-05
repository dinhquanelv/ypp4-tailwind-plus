import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTabs } from './with-tabs';

describe('WithTabs', () => {
  let component: WithTabs;
  let fixture: ComponentFixture<WithTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
