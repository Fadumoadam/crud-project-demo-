import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id : 1 , 
      name : 'Employee 1 ',
      email:'employee1@mail.com',
      phone: 1111
    },
    {
      id : 2 , 
      name : 'Employee 2 ',
      email:'employee2@mail.com',
      phone: 2222
    },
  ];

  constructor() { }

  onGet(){
    return  this.employees;
  }

  onAdd(employee : Employee){
    this.employees.push(employee);
  }

  onDelete(id: number){
    let employee = this.employees.find(x=>x.id === id);
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1);
  }
  onGetEmployee(id: number){
    return this.employees.find(x=>x.id === id);
  }
  onUpdate(employee:Employee){
    let oldEmployee = this.employees.find(x=>x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;

  }
}
