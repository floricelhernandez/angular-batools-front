import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { AuthenticationService } from '../../../core/services/auth.service';
import {Companies} from './companies.model';
import {throwError} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private api: string;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.api =  environment.api + 'proyectos/';
  }
  /**
   * Fetches Companies data
   */
  getProyectos() {
    return this.http.get(this.api).
    pipe(
        map((data: Companies[]) => {
          return data;
        }), catchError( error => {
          console.log(error);
          return throwError( 'Something went wrong!' );
        })
    );
  }

  /**
   * Fetches Companies data
   */
  setProyecto(proyecto: Companies) {
    return this.http.post<any>(this.api, proyecto).pipe(
        tap((newProyecto: Companies) => console.log(`added hero w/ id=${newProyecto.id}`)),
        catchError( error => {
          console.log(error);
          return throwError( 'Something went wrong!' );
        })
    );
  }
}
