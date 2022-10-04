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
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
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
