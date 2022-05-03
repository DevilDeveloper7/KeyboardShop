import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllByDateProductComponent } from './view-all-by-date-product.component';

describe('ViewAllByDateProductComponent', () => {
  let component: ViewAllByDateProductComponent;
  let fixture: ComponentFixture<ViewAllByDateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllByDateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllByDateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
