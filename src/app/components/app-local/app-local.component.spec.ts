import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLocalComponent } from './app-local.component';

describe('AppLocalComponent', () => {
  let component: AppLocalComponent;
  let fixture: ComponentFixture<AppLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
