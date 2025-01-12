import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmantComponent } from './departmant.component';

describe('DepartmantComponent', () => {
  let component: DepartmantComponent;
  let fixture: ComponentFixture<DepartmantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
