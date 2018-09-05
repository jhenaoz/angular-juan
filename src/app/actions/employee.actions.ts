import { Action } from '@ngrx/store';
import { Employee } from '../models/employee';


export const REMOVE_EMPLOYEE = '[EMPLOYEE] Remove';
export const ADD_EMPLOYEE = '[EMPLOYEE] Add';

export class RemoveEmployee implements Action {
  readonly type = REMOVE_EMPLOYEE;
  constructor(public payload: number) {}
}

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;
  constructor(public payload: Employee) {}
}

export type Actions = AddEmployee | RemoveEmployee;
