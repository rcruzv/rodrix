import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutDashboardComponent } from './app-layout-dashboard.component';

describe('AppLayoutDashboardComponent', () => {
  let component: AppLayoutDashboardComponent;
  let fixture: ComponentFixture<AppLayoutDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
