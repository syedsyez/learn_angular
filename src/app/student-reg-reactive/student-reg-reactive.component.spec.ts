import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegReactiveComponent } from './student-reg-reactive.component';

describe('StudentRegReactiveComponent', () => {
  let component: StudentRegReactiveComponent;
  let fixture: ComponentFixture<StudentRegReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
