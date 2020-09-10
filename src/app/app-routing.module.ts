import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployessComponent } from './pages/employess/employess.component'
import { EditComponent } from './pages/employess/edit/edit.component'

const routes: Routes = [
  {
     path: '' , 
     component:EmployessComponent
  },
  {
    path: 'employee/add/:id',
    component:EditComponent 
  },
  {
    path: 'employee/edit/:id',
    component:EditComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
