import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralOutlinesTableComponent } from './general-outlines-table.component';

describe('GeneralOutlinesTableComponent', () => {
  let component: GeneralOutlinesTableComponent;
  let fixture: ComponentFixture<GeneralOutlinesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralOutlinesTableComponent]
    });
    fixture = TestBed.createComponent(GeneralOutlinesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
