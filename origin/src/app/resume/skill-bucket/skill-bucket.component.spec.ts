import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillBucketComponent} from './skill-bucket.component';

describe('SkillBucketComponent', () => {
  let component: SkillBucketComponent;
  let fixture: ComponentFixture<SkillBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillBucketComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
