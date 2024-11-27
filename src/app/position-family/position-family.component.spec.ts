import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionFamilyComponent } from './position-family.component';

describe('PositionFamilyComponent', () => {
  let component: PositionFamilyComponent;
  let fixture: ComponentFixture<PositionFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionFamilyComponent]
    });
    fixture = TestBed.createComponent(PositionFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
