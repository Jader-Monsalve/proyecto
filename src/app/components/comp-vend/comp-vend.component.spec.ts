import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVendComponent } from './comp-vend.component';

describe('CompVendComponent', () => {
  let component: CompVendComponent;
  let fixture: ComponentFixture<CompVendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompVendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompVendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
