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
  template: `
    <mat-grid-list cols="2">
      <mat-grid-tile>
          <mat-card>
              <sc-bar-chart></sc-bar-chart>
          </mat-card>
      </mat-grid-tile>
      <mat-grid-tile>
          <mat-card>
              <sc-bar-chart></sc-bar-chart>
          </mat-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  standalone: true,
  imports: [
    ...matModules,
    CommonModule,
    PieChartComponent,
    BarChartComponent,
  ],
})
export class DashboardComponent {
}
