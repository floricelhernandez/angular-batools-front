import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { UIModule } from '../shared/ui/ui.module';

import { DashboardsModule } from './dashboards/dashboards.module';
import { AppsModule } from './apps/apps.module';
import { UiModule } from './ui/ui.module';
import { ExtrasModule } from './extras/extras.module';
import { ErrorModule } from './error/error.module';
import { AdminUIModule} from './adminUI/adminUI.module';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { IconsModule } from './icons/icons.module';
import { ChartModule } from './chart/chart.module';
import { MapsModule } from './maps/maps.module';
import { WidgetsComponent } from './widgets/widgets.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    UIModule,
    DashboardsModule,
    AppsModule,
    UiModule,
    NgApexchartsModule,
    ExtrasModule,
    ErrorModule,
    AdminUIModule,
    FormModule,
    TablesModule,
    IconsModule,
    ChartModule,
    MapsModule,
    PagesRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class PagesModule { }
