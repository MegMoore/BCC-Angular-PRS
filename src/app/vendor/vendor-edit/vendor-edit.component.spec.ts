import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEditComponent } from './vendor-edit.component';

describe('VendorEditComponent', () => {
  let component: VendorEditComponent;
  let fixture: ComponentFixture<VendorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorEditComponent]
    });
    fixture = TestBed.createComponent(VendorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});