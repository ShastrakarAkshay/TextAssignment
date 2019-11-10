import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-resume',
  templateUrl: './employee-resume.component.html',
  styleUrls: ['./employee-resume.component.css']
})
export class EmployeeResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    window.history.back();
  }

}
