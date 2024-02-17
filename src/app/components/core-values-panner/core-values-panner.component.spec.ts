import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreValuesPannerComponent } from './core-values-panner.component';

describe('CoreValuesPannerComponent', () => {
  let component: CoreValuesPannerComponent;
  let fixture: ComponentFixture<CoreValuesPannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreValuesPannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreValuesPannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
