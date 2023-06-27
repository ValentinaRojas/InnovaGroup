import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogRegComponent } from './navbar-log-reg.component';

describe('NavbarLogRegComponent', () => {
  let component: NavbarLogRegComponent;
  let fixture: ComponentFixture<NavbarLogRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLogRegComponent]
    });
    fixture = TestBed.createComponent(NavbarLogRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
