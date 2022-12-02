import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';

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
    ProductRoutingModule,
  ]
})
export class ProductModule { }
