import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesComponent } from './roles.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RoleDetailsComponent } from './details/details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RolesRoutingModule } from './roles-routing.module';

const matModules = [
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
];

@NgModule({
  declarations: [
    RolesComponent,
    RoleDetailsComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    RolesRoutingModule,
  ]
})
export class RolesModule { }
