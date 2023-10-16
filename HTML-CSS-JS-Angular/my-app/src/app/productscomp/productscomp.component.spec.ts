import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscompComponent } from './productscomp.component';

describe('ProductscompComponent', () => {
  let component: ProductscompComponent;
  let fixture: ComponentFixture<ProductscompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductscompComponent]
    });
    fixture = TestBed.createComponent(ProductscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
