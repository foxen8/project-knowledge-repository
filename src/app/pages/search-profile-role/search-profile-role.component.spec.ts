import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfileRoleComponent } from './search-profile-role.component';

describe('SearchProfileRoleComponent', () => {
  let component: SearchProfileRoleComponent;
  let fixture: ComponentFixture<SearchProfileRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProfileRoleComponent]
    });
    fixture = TestBed.createComponent(SearchProfileRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
