import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffDisplayComponent } from './diff-display.component';

describe('DiffDisplayComponent', () => {
  let component: DiffDisplayComponent;
  let fixture: ComponentFixture<DiffDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
