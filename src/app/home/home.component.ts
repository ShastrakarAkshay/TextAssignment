import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isLogin:boolean = false;

  constructor(private snackBar: MatSnackBar) {

   }

  ngOnInit() { 
    if(localStorage.getItem('login')=='true'){
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  }

  ngAfterViewInit() { 
    
  }

  validate(){
    if(this.isLogin == false){
      this.snackBar.open('Please Login First?', 'Login', {
        duration: 2000,
      });
    }
  }

}


