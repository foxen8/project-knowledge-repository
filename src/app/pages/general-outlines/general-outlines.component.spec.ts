import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralOutlinesComponent } from './general-outlines.component';

describe('GeneralOutlinesComponent', () => {
  let component: GeneralOutlinesComponent;
  let fixture: ComponentFixture<GeneralOutlinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralOutlinesComponent]
    });
    fixture = TestBed.createComponent(GeneralOutlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
