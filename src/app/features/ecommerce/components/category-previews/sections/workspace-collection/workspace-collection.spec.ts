import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceCollection } from './workspace-collection';

describe('WorkspaceCollection', () => {
  let component: WorkspaceCollection;
  let fixture: ComponentFixture<WorkspaceCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspaceCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
