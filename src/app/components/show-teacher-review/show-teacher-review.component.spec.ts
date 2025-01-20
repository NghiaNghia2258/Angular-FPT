import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeacherReviewComponent } from './show-teacher-review.component';

describe('ShowTeacherReviewComponent', () => {
  let component: ShowTeacherReviewComponent;
  let fixture: ComponentFixture<ShowTeacherReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTeacherReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTeacherReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
