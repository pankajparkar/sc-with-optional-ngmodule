import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BarChartComponent } from '../shared/bar-chart/bar-chart.component';
import { PieChartComponent } from '../shared/pie-chart/pie-chart.component';

const matModules = [
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
];

@Component({
  selector: 'sc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    ...matModules,
    CommonModule,
    PieChartComponent,
    BarChartComponent,
    // SharedModule,
  ],
})
export class DashboardComponent {
}
