import { CanMatchFn } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { RegistroService } from '../services/registro.service';

export const guardiaGuard: CanMatchFn = (route, segments) => {
  const _usuarioService = inject(RegistroService)
  return _usuarioService.logueoValido();
};
