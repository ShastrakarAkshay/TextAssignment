import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: string;
  empData: any;
  panelOpenState = false;
  step = 0;

  about: string = "";
  projectName: string = "";
  projectDesc: string = "";
  hobbie: string = "";
  notes: string = "";

  projectsArr: any = [];
  hobbies: any = [];

  constructor(private router: ActivatedRoute, private empService: EmployeeService, private route: Router, private toastr: ToastrService) {
    this.router.params.subscribe(param => {
      this.id = param.id;
    })

    this.empData = {
      id: '',
      empId: '',
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      mobile: '',
      designation: ''
    }
  }

  ngOnInit() {
    this.empService.getEmployeeById(this.id).subscribe(data => {
      this.empData = data.payload.data();
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

  redirect() {
    this.route.navigateByUrl("resume/" + this.id);
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addProject() {
    let p = {
      projectName: this.projectName,
      projectDesc: this.projectDesc
    }

    if(this.projectName != "" && this.projectDesc != ""){
      this.projectsArr.push(p);
      this.projectName = "";
      this.projectDesc = "";
    }
  }

  deleteProject(index: number) {
    this.projectsArr.splice(index, 1);
  }

  addHobbie() {
    if(this.hobbie){
      this.hobbies.push(this.hobbie);
      this.hobbie = "";
    }
  }

  deleteHobbie(index: number) {
    this.hobbies.splice(index, 1);
  }

  addInformation() {
    let otherDetails = {
      hobbies: this.hobbies,
      projects: this.projectsArr,
      about: this.about,
      notes: this.notes
    }

    this.empService.updateEmpWithProject(this.id, otherDetails);
    this.toastr.success("Information Updated");
  }

}
