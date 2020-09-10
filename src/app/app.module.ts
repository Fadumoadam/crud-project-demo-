import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { EmployessComponent } from './pages/employess/employess.component';
import { EditComponent } from './pages/employess/edit/edit.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployessComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
