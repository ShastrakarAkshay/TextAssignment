import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parseTemplate } from '@angular/compiler';

@Component({
  selector: 'app-employee-resume',
  templateUrl: './employee-resume.component.html',
  styleUrls: ['./employee-resume.component.css']
})
export class EmployeeResumeComponent implements OnInit {

  id: string;

  constructor(private routes: ActivatedRoute) {
    this.routes.params.subscribe(param => {
      this.id = param.id;
    })
  }

  ngOnInit() {
  }

  goBack() {
    window.history.back();
  }

}
