import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parseTemplate } from '@angular/compiler';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-resume',
  templateUrl: './employee-resume.component.html',
  styleUrls: ['./employee-resume.component.css']
})
export class EmployeeResumeComponent implements OnInit {

  id: string;
  empData:any = [];
  empName:string;

  about: string;
  projectsArr: any = [];
  hobbies: any = [];
  notes: string;

  constructor(private routes: ActivatedRoute, private empService: EmployeeService) {
    this.routes.params.subscribe(param => {
      this.id = param.id;
    })
  }

  ngOnInit() {
    this.empService.getEmployeeById(this.id).subscribe(data => {
      this.empData = data.payload.data();
      this.empName = this.empData.firstName + ' ' + this.empData.lastName;
      if (this.empData.otherInfo) {
        this.about = this.empData.otherInfo.about;
        this.projectsArr = this.empData.otherInfo.projects;
        this.hobbies = this.empData.otherInfo.hobbies;
        this.notes = this.empData.otherInfo.notes;
      }
    })
  }

  goBack() {
    window.history.back();
  }

}
