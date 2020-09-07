import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { CompaniesComponent } from './proyectos/companies.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TeammembersComponent } from './teammembers/teammembers.component';

import { InboxComponent } from './email/inbox/inbox.component';
import { ReademailComponent } from './email/reademail/reademail.component';
import { ComposeemailComponent } from './email/composeemail/composeemail.component';

const routes: Routes = [
    {
        path: 'kanbanboard',
        component: KanbanboardComponent
    },
    {
        path: 'proyectos',
        component: CompaniesComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'file-manager',
        component: FilemanagerComponent
    },
    {
        path: 'tickets',
        component: TicketsComponent
    },
    {
        path: 'team-members',
        component: TeammembersComponent
    },
    {
        path: 'email-inbox',
        component: InboxComponent
    },
    {
        path: 'email-read',
        component: ReademailComponent
    },
    {
        path: 'email-compose',
        component: ComposeemailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
