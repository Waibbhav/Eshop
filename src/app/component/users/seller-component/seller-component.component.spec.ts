import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerComponentComponent } from './seller-component.component';

describe('SellerComponentComponent', () => {
  let component: SellerComponentComponent;
  let fixture: ComponentFixture<SellerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
