import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empData: any = [];
  formGroup: FormGroup;
  mobileNumber = "[0-9]{10}";
  formHeader: string = '';
  id: string;

  constructor(private empService: EmployeeService, private router: Router, private tostr: ToastrService, private firestore: AngularFirestore) {
    // this.empData = empService.getEmployeeData();

    this.formGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      designation: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      mobile: new FormControl('', [Validators.required, Validators.pattern(this.mobileNumber)])
    });
  }

  ngOnInit() {

    this.empService.getEmployeeData().subscribe(data => {
      this.empData = data.map(item => {
        return {
          id: item.payload.doc.id,
          empId: Number(item.payload.newIndex) + 1 * 1000,
          ...item.payload.doc.data()
        }
      })
    })
  }

  goBack() {
    window.history.back();
  }

  onSubmit() {
    const formData = this.formGroup.value;
    if (this.id == null){
      this.empService.addEmployee(formData);
      this.tostr.success('Employee Added Successfully !', 'Employee Register');
    }
    else{
      formData.id = this.id;
      this.empService.updateEmployee(formData);
      this.tostr.success('Employee Updated Successfully !', 'Employee Register');
    }

    this.formGroup.reset();
  }

  addEmployee() {
    this.formGroup.reset();
    this.id = null;
    this.formHeader = 'Add New Employee';
  }

  deleteEmployee(emp: any) {
    let isDelete = confirm('Do You Want To Delete Employee - ' + emp.firstName + ' ' + emp.lastName + '(' + emp.empId + ')');
    if(isDelete){
      this.empService.deleteEmployee(emp.id);
      this.tostr.info('Employee Deleted');
    }

  }

  editEmployee(emp: any) {
    this.formGroup.reset();
    this.formHeader = 'Emp ID - ' + emp.empId;

    this.formGroup.setValue({
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      designation: emp.designation,
      gender: emp.gender,
      address: emp.address,
      mobile: emp.mobile
    });

    this.id = emp.id;
  }

  filterByName(serachKey: string) {
    // let filterArr = [];
    // for (let emp of this.empData) {
    //   if (emp.firstName.startsWith(serachKey)) {
    //     filterArr.push(emp);
    //   }
    // }
    // this.empData = filterArr;
  }



}
