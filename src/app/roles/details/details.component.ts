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
  template: `
    <mat-card>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-content>
          <p>This card has divider and indeterminate progress as footer</p>
          <p>
              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
              from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
              originally bred for hunting
          </p>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
  `,
  standalone: true,
  imports: [
    ...matModules,
    CommonModule,
    RouterModule,
  ]
})
export class RoleDetailsComponent {
}

