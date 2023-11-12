import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearproductosComponent } from './crearproductos.component';

describe('CrearproductosComponent', () => {
  let component: CrearproductosComponent;
  let fixture: ComponentFixture<CrearproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearproductosComponent]
    });
    fixture = TestBed.createComponent(CrearproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
