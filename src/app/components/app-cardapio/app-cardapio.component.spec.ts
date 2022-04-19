import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardapioComponent } from './app-cardapio.component';

describe('AppCardapioComponent', () => {
  let component: AppCardapioComponent;
  let fixture: ComponentFixture<AppCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
