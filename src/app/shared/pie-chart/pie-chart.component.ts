import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartType, ChartOptions } from 'chart.js';
import {
  NgChartsModule
} from 'ng2-charts';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
];

@Component({
  selector: 'sc-pie-chart',
  template: `
    <canvas baseChart 
      [data]="pieChartData" 
      [labels]="pieChartLabels" 
      [options]="pieChartOptions"
      pieChartType="pie"
      [plugins]="pieChartPlugins"
      [legend]="pieChartLegend">
    </canvas>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  standalone: true,
  imports: [
    ...materialModules,
    NgChartsModule,
    CommonModule,
  ]
})
export class PieChartComponent {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: any[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: any = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
