import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PeriodicElement } from '../models';
import { ApiService } from '../services/api.service';

const matModules = [
  MatTableModule,
  MatCardModule,
];

@Component({
  selector: 'sc-roles',
  template: `
    <mat-card>
      <mat-card-title>Roles</mat-card-title>
      <mat-card-subtitle>admin can modify roles</mat-card-subtitle>
      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
          <!-- Position Column -->
          <ng-container matColumnDef="position">
              <th mat-header-cell *matHeaderCellDef> No. </th>
              <td mat-cell *matCellDef="let element"> {{element.position}} </td>
          </ng-container>
          <!-- Name Column -->
          <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef> Name </th>
              <td mat-cell *matCellDef="let element">
                  <a [routerLink]="['details', element.name]">
                      {{element.name}}
                  </a>
              </td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </mat-card>
  `,
  styles: [`
    table {
      width: 100%;
    }
    mat-card {
      margin: 20px;
    }
  `],
  standalone: true,
  imports: [
    ...matModules,
    CommonModule,
    RouterModule,
  ]
})
export class RolesComponent {
  private apiService = inject(ApiService);
  displayedColumns: string[] = ['position', 'name'];
  dataSource: PeriodicElement[] = this.apiService.getPeriodicElements();
}
