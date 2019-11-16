import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSpinnerService } from 'ngx-spinner';

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
  btnLabel: string = '';
  isDisabled: boolean = false;
  id: string;
  role: string = '';

  @ViewChild('closeModal', {static: false}) closeModal : ElementRef;

  notEmptyPost: boolean = true;
  notScroll: boolean = true;

  constructor(private empService: EmployeeService, private router: Router, private tostr: ToastrService,
    private firestore: AngularFirestore, private spinner: NgxSpinnerService) {
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
    this.spinner.show();
    this.getEmployeeData();
    this.role = localStorage.getItem('role')
  }

  getEmployeeData() {
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
    if (this.id == null) {
      if (this.formGroup.valid) {
        this.empService.addEmployee(formData);
        this.tostr.success('Employee Added Successfully !');
      }
    }
    else {
      formData.id = this.id;
      this.empService.updateEmployee(formData);
      this.tostr.success('Employee Updated Successfully !');
    }
    this.closeModal.nativeElement.click(); //programatically closing the modal
    this.formGroup.reset();
  }

  addEmployee() {
    this.formGroup.reset();
    this.id = null;
    this.formHeader = 'Add New Employee';
    this.btnLabel = "Submit";
    this.isDisabled = false;
  }

  deleteEmployee(emp: any) {
    let isDelete = confirm('Do You Want To Delete Employee - ' + emp.firstName + ' ' + emp.lastName + '(' + emp.empId + ')');
    if (isDelete) {
      this.empService.deleteEmployee(emp.id);
      this.tostr.info('Employee Deleted');
    }

  }

  editEmployee(emp: any) {
    this.formGroup.reset();
    this.isDisabled = true;
    this.formHeader = 'Emp ID - ' + emp.empId;
    this.btnLabel = "Update";

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

  }

  redirect(id: string) {
    this.router.navigateByUrl('empDetails/' + id);
  }

  onFormChange() {
    this.isDisabled = false;
  }

  onScroll() {

    if (this.notEmptyPost && this.notScroll) {
      this.spinner.show();
      this.notScroll = false;
      this.loadNextPost();
    }
  }

  loadNextPost() {
    //return last post from array
    const lastPost = this.empData[this.empData.length - 1];

    //get id of last post
    const lastPostId = lastPost.id;

    //send this id as key value parse using formdata()
    const dataToSend = new FormData();
    dataToSend.append('id', lastPostId);

    //call http request
    this.empService.getEmployeeData().subscribe(data => {
      const newPost = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      })
      this.spinner.hide();
      if (newPost.length === 0) {
        this.notEmptyPost = false;
      }

      //add newly fetched post to already existing data
      //   this.empData = this.empData.concat(newPost);
      this.notScroll = true;
    })
  }

}
