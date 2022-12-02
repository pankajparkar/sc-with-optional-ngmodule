import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

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
