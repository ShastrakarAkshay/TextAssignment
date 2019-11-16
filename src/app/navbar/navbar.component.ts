import { Component, OnInit, Inject, AfterViewInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmployeeService } from '../shared/employee.service';
import { ConcatSource } from 'webpack-sources';
import { Router } from '@angular/router';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  isLogin: boolean = false;

  constructor(private dialog: MatDialog, private router: Router, private empService: EmployeeService) {
  }

  ngOnInit() {
    if (!this.empService.isLogin()) {
        this.openDialog();
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  ngAfterViewInit() { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '400px',
      data: { name: 'akshay' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!this.empService.isLogin())
        this.isLogin = true;
      else
        this.isLogin = false;
    });
  }

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialog, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'logout') {
        this.empService.logout();
        this.router.navigateByUrl('');
          this.openDialog();
      }
    });
  }

  logout() {
    this.openLogoutDialog();
  }
}


@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
  styles: [`i:hover{ color: blue;}`]
})
export class LoginDialog implements OnInit {

  loginForm: FormGroup;
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;

  constructor(private empService: EmployeeService, private router: Router,
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { name: 'akshay' }) {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
    this.loginForm.reset();
  }

  validateLogin() {
    const user = this.loginForm.get('username').value;
    const pass = this.loginForm.get('password').value;

    if ((user == 'Admin' && pass == 'Akshay@13.13') || (user == 'Public' && pass == '12345')) {
      this.invalidLogin = false;

      localStorage.setItem('token', 'true');

      if (user == 'Admin') {
        localStorage.setItem('role', 'admin');
      }
      else {
        localStorage.setItem('role', 'public');
      }

      this.empService.isLogin();
      this.onNoClick();
      this.router.navigateByUrl('/empList');
    } else {
      this.invalidLogin = true;
    }
  }
}

@Component({
  selector: 'logout-dialog',
  templateUrl: 'logout-dialog.html'
})
export class LogoutDialog implements OnInit {

  constructor(private empService: EmployeeService, private router: Router,
    public dialogRef: MatDialogRef<LogoutDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { key: 'logout' }) {
  }

  ngOnInit() { }

  onNoClick() {
    this.dialogRef.close();
  }
}


