import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

const matModules = [
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    ...matModules,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
    ]),
    SharedModule,
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
