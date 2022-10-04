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
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
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
