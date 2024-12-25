import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLisstComponent } from './post-lisst.component';

describe('PostLisstComponent', () => {
  let component: PostLisstComponent;
  let fixture: ComponentFixture<PostLisstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostLisstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLisstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
