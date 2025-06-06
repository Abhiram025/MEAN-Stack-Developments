import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hbm-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employee!:EmployeeComponent
  constructor() {}

  ngAfterContentInit(): void {
    this.employee.name=`Arjun`
  }

  ngOnInit(): void {
    
  }
}
