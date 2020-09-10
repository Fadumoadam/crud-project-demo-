import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service'
import { Employee } from 'src/app/models/employee.model';
@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent implements OnInit {
  employees: Employee [];
  constructor( private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }
  onDelete(id:number){
    this.employeeService.onDelete(id);

  }

}
