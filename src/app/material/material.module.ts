import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTooltipModule
} from '@angular/material';

const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTooltipModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule {}
