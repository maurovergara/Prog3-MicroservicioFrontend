import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Examen } from '../models/examen';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService extends CommonService<Examen>{

  protected baseEndpoint = 'http://localhost:8090/api/v1/examenes';

  constructor(http: HttpClient) { 
    super(http);
  }

  public findAllAsignatura(): Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(`${this.baseEndpoint}/asignaturas`);
  }

  public filtrarPorNombre(nombre: string): Observable<Examen[]>{
    return this.http.get<Examen[]>(`${this.baseEndpoint}/filtrar/${nombre}`);
  }
}
