import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkordersDisplayComponent } from './workorders-display.component';

describe('WorkordersDisplayComponent', () => {
  let component: WorkordersDisplayComponent;
  let fixture: ComponentFixture<WorkordersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkordersDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkordersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
