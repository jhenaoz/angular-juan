import { Employee } from '../models/employee';
import * as EmployeeActions from '../actions/employee.actions';


const today = new Date();
const initialState: Employee[] = [
  {id: 1, name: 'Juan', age: 12, username: 'jhenaoz', hireDate: today, area: 'service',
   jobTitle: 'sample', tipRate: 0.3, dob: today, status: true, country: 'colombia' },
  {id: 2, name: 'Carlos', age: 22, username: 'carlos', hireDate: today, area: 'service',
   jobTitle: 'sample', tipRate: 0.3, dob: today, status: true, country: 'colombia' },
  {id: 3, name: 'Pedro', age: 21, username: 'peter', hireDate: today, area: 'service',
   jobTitle: 'sample', tipRate: 0.3, dob: today, status: true, country: 'colombia' },
  {id: 4, name: 'Otro', age: 32, username: 'other', hireDate: today, area: 'service',
   jobTitle: 'sample', tipRate: 0.3, dob: today, status: false, country: 'colombia' },
];

export function reducer(state: Employee[]= [...initialState], action: EmployeeActions.Actions) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload];
    case EmployeeActions.REMOVE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.payload);
    default:
      return state;
  }
}
