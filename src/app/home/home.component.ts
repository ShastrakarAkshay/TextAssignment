import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private snackBar: MatSnackBar, private empService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  validate() {
    if (!this.empService.isLogin()) {
      this.snackBar.open('Please Login First?', 'Login', {
        duration: 1000,
      });
    }
  }

  addProject() {
    if (localStorage.getItem('role') == "admin") {
      this.router.navigateByUrl("/addProject");
    } else if (!this.empService.isLogin()) {
      this.snackBar.open('Please Login First?', 'Login', {
        duration: 1000,
      });
    } else {
      this.snackBar.open('Unauthorized Access?', '', {
        duration: 1000
      });
    }
  }

}


