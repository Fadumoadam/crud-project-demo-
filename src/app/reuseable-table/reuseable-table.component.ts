import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'reuseable-table',
  templateUrl: './reuseable-table.component.html',
  styleUrls: ['./reuseable-table.component.css']
})
export class ReuseableTableComponent implements OnInit {
  tableDataSrc: any; 
  @Input('tableColumns') tableCols: string[];
  @Input('tableColumns') displayedColumns: string[];
  @Input() tableData: {} [] = [] ; 

  constructor() { }
  ngOnInit(): void {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
  }

}
