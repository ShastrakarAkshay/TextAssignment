import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: string;
  empData: any;
  
  constructor(private router: ActivatedRoute, private empService: EmployeeService, private route: Router) {
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
    })
  }

  goBack(){
    window.history.back();
  }

  redirect(){
    this.route.navigateByUrl("resume/"+this.id);
  }

}
