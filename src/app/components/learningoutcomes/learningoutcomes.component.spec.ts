import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningoutcomesComponent } from './learningoutcomes.component';

describe('LearningoutcomesComponent', () => {
  let component: LearningoutcomesComponent;
  let fixture: ComponentFixture<LearningoutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningoutcomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningoutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
