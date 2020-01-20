import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import {SharedModule} from '../../shared/shared.module';

import { ChartModule } from 'primeng';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChartModule,
    ReportsRoutingModule,
  ]
})
export class ReportsModule { }
