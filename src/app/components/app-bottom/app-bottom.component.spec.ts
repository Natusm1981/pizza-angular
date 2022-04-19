import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBottomComponent } from './app-bottom.component';

describe('AppBottomComponent', () => {
  let component: AppBottomComponent;
  let fixture: ComponentFixture<AppBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
