import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProdListComponent } from './sub-prod-list.component';

describe('SubProdListComponent', () => {
  let component: SubProdListComponent;
  let fixture: ComponentFixture<SubProdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProdListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
