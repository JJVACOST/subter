import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoComponent } from './detalle-producto.component';

import { configureTestingModule } from 'src/app/testing/testing-setup';

describe(`(1) Test del componente "DetalleProductoComponent"`, () => {
  let component: DetalleProductoComponent;
  let fixture: ComponentFixture<DetalleProductoComponent>;

  beforeEach(() => {

    configureTestingModule([DetalleProductoComponent])

    fixture = TestBed.createComponent(DetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea mi componente', () => {

    expect(component).toBeTruthy();
  });

  it('Prueba1',() => {
        const result = 2 + 2

        expect(result).toEqual(4);
    }
  );

  it('Prueba2',() => {
    const result = 2 + 2

    expect(result).toEqual(5);
}
);
});
