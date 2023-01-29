import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubprodlistComponent } from './subprodlist.component';

describe('SubprodlistComponent', () => {
  let component: SubprodlistComponent;
  let fixture: ComponentFixture<SubprodlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubprodlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubprodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
