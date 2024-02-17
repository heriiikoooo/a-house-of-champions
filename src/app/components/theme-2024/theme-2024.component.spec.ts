import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme2024Component } from './theme-2024.component';

describe('Theme2024Component', () => {
  let component: Theme2024Component;
  let fixture: ComponentFixture<Theme2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theme2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Theme2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
