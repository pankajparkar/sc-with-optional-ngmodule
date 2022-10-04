import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const matModules = [
  MatTableModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductComponent },
    ])
  ]
})
export class ProductModule { }
