import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegformComponent } from './student-regform.component';

describe('StudentRegformComponent', () => {
  let component: StudentRegformComponent;
  let fixture: ComponentFixture<StudentRegformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
