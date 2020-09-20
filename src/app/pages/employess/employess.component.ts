import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service'
import { Employee } from 'src/app/models/employee.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent implements OnInit {
  employees: Employee [];
  constructor( private employeeService:EmployeeService,private router: Router) { }
  tableCols = ['id','name','email','phone','delete']
  displayedColumns = ['id','name','email','phone','edit','delete']
  
  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }
  onDelete(id:any){
    this.employeeService.onDelete(id);
    console.log('test')
  }
  onEdit(id:any){
    this.router.navigateByUrl('/employee/edit/'+id);
    console.log('work')
  }

}
