import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tableData } from './data';
import { TableData } from './tickets.model';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

import { SortDirection } from './tickets-sortable.directive';

import { SearchResult } from './tickets.model';

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

/**
 * Sort the table data
 * @param tickets Table field value
 * @param column Fetch the column
 * @param direction Sort direction Ascending or Descending
 */

function sort(tickets: TableData[], column: string, direction: string): TableData[] {
  if (direction === '') {
    return tickets;
  } else {
    return [...tickets].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

/**
 * Table Data Match with Search input
 * @param ticket Table field value fetch
 * @param term Search the value
 */
function matches(ticket: TableData, term: string) {
  return ticket.name.toLowerCase().includes(term)
    || ticket.subject.toLowerCase().includes(term)
    || ticket.createddate.toLowerCase().includes(term)
    || ticket.priority.toLowerCase().includes(term)
    || ticket.id.toLowerCase().includes(term)
    || ticket.duedate.toLowerCase().includes(term)
    || ticket.status.toLowerCase().includes(term);
}

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  // tslint:disable-next-line: variable-name
  private _loading$ = new BehaviorSubject<boolean>(true);
  // tslint:disable-next-line: variable-name
  private _search$ = new Subject<void>();
  // tslint:disable-next-line: variable-name
  private _tickets$ = new BehaviorSubject<TableData[]>([]);
  // tslint:disable-next-line: variable-name
  private _total$ = new BehaviorSubject<number>(0);

  // tslint:disable-next-line: variable-name
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._tickets$.next(result.tickets);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get tickets$() { return this._tickets$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  // tslint:disable-next-line: adjacent-overload-signatures
  set page(page: number) { this._set({page}); }
  // tslint:disable-next-line: adjacent-overload-signatures
  set pageSize(pageSize: number) { this._set({pageSize}); }
  // tslint:disable-next-line: adjacent-overload-signatures
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  /**
   * Search Method
   */
  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let tickets = sort(tableData, sortColumn, sortDirection);
    // 2. filter
    tickets = tickets.filter(ticket => matches(ticket, searchTerm));
    const total = tickets.length;

    // 3. paginate
    tickets = tickets.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({tickets, total});
  }
}
