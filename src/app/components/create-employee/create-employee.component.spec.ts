import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';
import { MaterialModule } from '../../app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ],
      imports: [MaterialModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
