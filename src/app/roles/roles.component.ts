import { Component, inject } from '@angular/core';
import { PeriodicElement } from '../models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  private apiService = inject(ApiService);
  displayedColumns: string[] = ['position', 'name'];
  dataSource: PeriodicElement[] = this.apiService.getPeriodicElements();
}
