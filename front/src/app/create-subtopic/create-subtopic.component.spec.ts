import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubtopicComponent } from './create-subtopic.component';

describe('CreateSubtopicComponent', () => {
  let component: CreateSubtopicComponent;
  let fixture: ComponentFixture<CreateSubtopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubtopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
