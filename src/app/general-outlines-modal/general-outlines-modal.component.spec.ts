import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralOutlinesModalComponent } from './general-outlines-modal.component';

describe('GeneralOutlinesModalComponent', () => {
  let component: GeneralOutlinesModalComponent;
  let fixture: ComponentFixture<GeneralOutlinesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralOutlinesModalComponent],
    });
    fixture = TestBed.createComponent(GeneralOutlinesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
