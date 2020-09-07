import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbDropdownModule, NgbModalModule, NgbTypeaheadModule, NgbPaginationModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ngx-drag-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEditorModule } from 'ngx-editor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './apps-routing.module';

import { UIModule } from '../../shared/ui/ui.module';

import { TicketsSortableDirective } from './tickets/tickets-sortable.directive';

import { FullCalendarModule } from '@fullcalendar/angular';

import { CompaniesComponent } from './proyectos/companies.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { TicketsComponent } from './tickets/tickets.component';
import { InboxComponent } from './email/inbox/inbox.component';
import { ReademailComponent } from './email/reademail/reademail.component';
import { ComposeemailComponent } from './email/composeemail/composeemail.component';
import { TeammembersComponent } from './teammembers/teammembers.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [KanbanboardComponent, CompaniesComponent, CalendarComponent, FilemanagerComponent, TicketsComponent, InboxComponent, ReademailComponent, ComposeemailComponent, TicketsSortableDirective, TeammembersComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbDropdownModule,
    UIModule,
    FormsModule,
    DndModule,
    NgbModalModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    FullCalendarModule,
    HttpClientModule,
    NgbCollapseModule,
    NgxEditorModule,
    Ng2SearchPipeModule,
    NgbTypeaheadModule
  ],

})
export class AppsModule { }
