import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditProductComponent } from './addedit-product.component';

describe('AddeditProductComponent', () => {
  let component: AddeditProductComponent;
  let fixture: ComponentFixture<AddeditProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddeditProductComponent],
    });
    fixture = TestBed.createComponent(AddeditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
