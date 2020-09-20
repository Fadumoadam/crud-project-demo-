import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import {MatTableDataSource} from '@angular/material/table';
import {EmployeeService} from '../services/employee.service'

@Component({
  selector: 'reuseable-table',
  templateUrl: './reuseable-table.component.html',
  styleUrls: ['./reuseable-table.component.css']
})
export class ReuseableTableComponent implements OnInit {
  tableDataSrc: any; 
  @Input('tableColumns') tableCols: string[];
  @Input('tableColumnstwo') displayedColumns: string[];
  @Input() tableData: {} [] = [] ; 
  @Output() valueDelete = new EventEmitter();
  @Output() valueEdit = new EventEmitter();
  counter = 0;

  constructor(private employeeService:EmployeeService) { }
  ngOnInit(): void {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
  }

  valueDeleted(id:number) {
    this.valueDelete.emit(id);
    this.tableDataSrc._updateChangeSubscription(); 
  }
  valueEdited(id:number) {
    this.valueEdit.emit(id);
    this.tableDataSrc._updateChangeSubscription(); 
  }
}
