import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, TooltipPosition } from '@angular/material';
import { RemoveEmployee } from '../../actions/employee.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any;
  tooltipPosition: TooltipPosition = 'above';
  displayedColumns: string[] = [
    'name',
    'age',
    'username',
    'hireDate',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<AppState>) {
    store.select('employee').subscribe(data => {
      this.employees = new MatTableDataSource(data);
    });
  }

  ngOnInit() {
    this.employees.sort = this.sort;
  }

  removeEmployee(employee) {
    this.store.dispatch(new RemoveEmployee(employee.id));
  }

  applyFilter(filterValue: string) {
    this.employees.filter = filterValue.trim().toLowerCase();
  }
}
