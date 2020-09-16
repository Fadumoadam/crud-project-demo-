import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { EmployessComponent } from './pages/employess/employess.component';
import { EditComponent } from './pages/employess/edit/edit.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MetrialModule } from './metrial/metrial.module';
import { ReuseableTableComponent } from './reuseable-table/reuseable-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployessComponent,
    EditComponent,
    ReuseableTableComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MetrialModule , 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
