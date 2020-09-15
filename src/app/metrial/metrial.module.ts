import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';



const MatModule = [
  MatToolbarModule,
  MatIconModule , 
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatCardModule,
  MatSelectModule
]

@NgModule({
  imports: [MatModule],
  exports:[MatModule]
})
export class MetrialModule { }
