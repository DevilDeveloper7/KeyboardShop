import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllByCategoryProductComponent } from './view-all-by-category-product.component';

describe('ViewAllByCategoryProductComponent', () => {
  let component: ViewAllByCategoryProductComponent;
  let fixture: ComponentFixture<ViewAllByCategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllByCategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllByCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
