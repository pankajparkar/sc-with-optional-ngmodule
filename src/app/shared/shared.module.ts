import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NavbarComponent } from './navbar/navbar.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

const chartComponents = [
  BarChartComponent,
  PieChartComponent,
];

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
]

@NgModule({
  declarations: [
    ...chartComponents,
    NavbarComponent,
  ],
  imports: [
    ...materialModules,
    NgChartsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...chartComponents,
    NavbarComponent,
  ]
})
export class SharedModule { }
