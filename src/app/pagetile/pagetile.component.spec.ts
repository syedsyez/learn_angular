import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetileComponent } from './pagetile.component';

describe('PagetileComponent', () => {
  let component: PagetileComponent;
  let fixture: ComponentFixture<PagetileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagetileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagetileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
