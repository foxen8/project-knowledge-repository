import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineModalComponent } from './outline-modal.component';

describe('OutlineModalComponent', () => {
  let component: OutlineModalComponent;
  let fixture: ComponentFixture<OutlineModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutlineModalComponent]
    });
    fixture = TestBed.createComponent(OutlineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
