import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgePageComponent } from './knowledge-page.component';

describe('KnowledgePageComponent', () => {
  let component: KnowledgePageComponent;
  let fixture: ComponentFixture<KnowledgePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgePageComponent]
    });
    fixture = TestBed.createComponent(KnowledgePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
