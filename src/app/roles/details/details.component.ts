import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

const matModules = [
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
];

@Component({
  selector: 'sc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [
    ...matModules,
    CommonModule,
    RouterModule,
  ]
})
export class RoleDetailsComponent {
}

