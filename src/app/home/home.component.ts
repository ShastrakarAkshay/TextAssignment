import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private snackBar: MatSnackBar, private empService: EmployeeService) {
   }

  ngOnInit() { 
  }

  ngAfterViewInit() { 
  }

  validate(){
    if(!this.empService.isLogin()){
      this.snackBar.open('Please Login First?', 'Login', {
        duration: 1000,
      });
    }
  }

}


