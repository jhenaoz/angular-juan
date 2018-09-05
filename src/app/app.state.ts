import {Employee} from './models/employee';

export interface AppState {
  readonly employee: Employee[];
}
