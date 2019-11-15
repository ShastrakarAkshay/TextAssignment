import { Component, OnInit, Inject, AfterViewInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmployeeService } from '../shared/employee.service';
import { ConcatSource } from 'webpack-sources';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  isLogin: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
    let login = localStorage.getItem('login');
    if (localStorage.getItem('login') === 'true') {
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }

  ngAfterViewInit() {
    if (this.isLogin == false) {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '400px',
      data: { name: 'akshay' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout(){
    localStorage.setItem('login', 'false');
    localStorage.setItem('role', '');
    this.isLogin = false;
    this.router.navigateByUrl('');
    this.openDialog();
  }

}


@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
  styles: [`i:hover{ color: blue;}`]
})
export class LoginDialog implements OnInit {

  loginForm: FormGroup;
  userData: any = [];
  username: string = '';
  password: string = '';
  userType: string = '';
  invalidLogin: boolean = false;


  constructor(private empService: EmployeeService, private router: Router,
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { name: 'akshay' }) {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.empService.getUsers().subscribe(result => {
      result.forEach(items => {
        this.userData.push(items.payload.doc.data());
      })
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
    this.loginForm.reset();
  }

  validateLogin(title: string) {
    console.log('title', title)
    const user = this.loginForm.get('username').value;
    const pass = this.loginForm.get('password').value;
    this.userData.forEach(item => {
      if (user === item.username && pass === item.password) {
        this.userType = item.role;
        this.invalidLogin = false;
        localStorage.setItem('login', 'true');
        localStorage.setItem('role', item.role);
        this.onNoClick();
        this.router.navigateByUrl('/empList')
      } else {
        this.invalidLogin = true;
      }
    })

  }

}
