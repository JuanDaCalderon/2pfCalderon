import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { cursos } from '../other/cursos';
import { alumnosApi } from '../other/users';

@Injectable({
  providedIn: 'root'
})

export class CursosService {
  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get<cursos>('https://629415d0089f87a57ac8f2a2.mockapi.io/api/v1/cursos')
      .pipe(
        map(data => {
          let cursos: cursos[] = [];
          for (const id in data) {
            let curso: cursos;
            curso = {
              curso: data[id].curso,
              id: data[id].id,
              clases: data[id].clases
            };
            cursos.push(curso);
          }
          return cursos
        }),
        catchError(err => {
          let message: string;
          message = 'Error intentando traer los cursos, intenta más tarde'
          return throwError(() => message);
        })
      )
  }

  /* postCurso(alumno: { firstName: string, middleName: string, lastName: string, curso: number }) {
    return this.http.post <alumnosApi>('https://629415d0089f87a57ac8f2a2.mockapi.io/api/v1/alumnos', alumno)
      .pipe(
        map(data => {
          return data
        }),
        catchError(err => {
          let message: string;
          message = 'Error intentando agregar el alumno, intenta más tarde'
          return throwError(() => message);
        })
      )
  } */

  /* editCurso(alumno: { firstName: string, middleName: string, lastName: string, curso: number }, id: string) {
    return this.http.put <alumnosApi>('https://629415d0089f87a57ac8f2a2.mockapi.io/api/v1/alumnos/'+id, alumno)
      .pipe(
        map(data => {
          return data
        }),
        catchError(err => {
          let message: string;
          message = 'Error intentando modificar el alumno, intenta más tarde'
          return throwError(() => message);
        })
      )
  } */

  /* deleteCurso(alumnos: alumnosOutput) {
    return this.http.delete <alumnosApi>('https://629415d0089f87a57ac8f2a2.mockapi.io/api/v1/alumnos/'+ alumnos.id)
      .pipe(
        map(data => {
          return data
        }),
        catchError(err => {
          let message: string;
          message = 'Error intentando eliminar el alumno, intenta más tarde'
          return throwError(() => message);
        })
      )
  } */

}
