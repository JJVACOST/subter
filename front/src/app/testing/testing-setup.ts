import { TestBed, TestModuleMetadata } from "@angular/core/testing";
import { of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ProductosService } from "../services/productos.service";
import { RegistroService } from "../services/registro.service";
import { UploadService } from "../services/uploadFiles.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";


// Función para configurar las pruebas
export function configureTestingModule(declarations: any[] = []): TestModuleMetadata {
    return {
      declarations: declarations,
      providers: [
        // Puedes agregar otros servicios simulados aquí según sea necesario

          ProductosService, RegistroService,  UploadService,

        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: (param: string) => 'valor simulado' }) }
        }
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClient]
    };}
