import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleComponent } from './google/google.component';

import { UIModule } from '../../shared/ui/ui.module';
import { AgmCoreModule } from '@agm/core';

import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
  declarations: [GoogleComponent],
  imports: [
    CommonModule,
    UIModule,
    MapsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    })
  ]
})
export class MapsModule { }
