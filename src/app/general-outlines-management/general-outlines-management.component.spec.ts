import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralOutlinesManagementComponent } from './general-outlines-management.component';

describe('GeneralOutlinesManagementComponent', () => {
  let component: GeneralOutlinesManagementComponent;
  let fixture: ComponentFixture<GeneralOutlinesManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralOutlinesManagementComponent],
    });
    fixture = TestBed.createComponent(GeneralOutlinesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});