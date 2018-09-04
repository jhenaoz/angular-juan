import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface Employee {
  name: string;
  age: number;
  username: string;
  hireDate: string;
}

const ELEMENT_DATA: Employee[] = [
  {name: 'Juan', age: 12, username: 'jhenaoz', hireDate: '12/21/1993'},
  {name: 'Carlos', age: 22, username: 'carlos', hireDate: '12/21/1993'},
  {name: 'Pedro', age: 21, username: 'peter', hireDate: '12/21/2010'},
  {name: 'Otro', age: 32, username: 'other', hireDate: '12/21/2000'},
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'age',
    'username',
    'hireDate'
  ];
  employees = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.employees.sort = this.sort;
    console.log('Hola mundo');
  }

}
