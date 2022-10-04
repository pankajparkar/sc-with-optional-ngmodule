import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { PeriodicElement } from '../models';
import { ApiService } from '../services/api.service';

const matModules = [
  MatTableModule,
  MatCardModule,
];

@Component({
  selector: 'sc-product',
  template: `
  <mat-card>
    <mat-card-title>Product</mat-card-title>
    <mat-card-subtitle>List of products from inventory</mat-card-subtitle>
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
        <!-- Position Column -->
        <ng-container matColumnDef="position">
            <th mat-header-cell *matHeaderCellDef> No. </th>
            <td mat-cell *matCellDef="let element"> {{element.position}} </td>
        </ng-container>
        <!-- Name Column -->
        <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef> Name </th>
            <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </mat-card>
  `,
  standalone: true,
  imports: [
    ...matModules,
    CommonModule,
  ]
})
export class ProductComponent {
  private apiService = inject(ApiService);
  displayedColumns: string[] = ['position', 'name'];
  dataSource: PeriodicElement[] = this.apiService.getPeriodicElements();
}
