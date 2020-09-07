import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { AuthenticationService } from '../../../core/services/auth.service';
import {Task} from './task.model';
import {throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import {Lista} from './lista.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private api: string;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.api =  environment.api + 'kanban/';
  }

  /**
   * Fetches Kanban list data
   */
  getListasKanban(id) {
    return this.http.get(this.api  + id + '/' + 'listas').
    pipe(
        map((data: Lista[]) => {
          return data;
        }), catchError( error => {
          console.log(error);
          return throwError( 'Something went wrong!' );
        })
    );
  }
}
