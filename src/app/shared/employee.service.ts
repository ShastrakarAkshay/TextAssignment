import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empData = [
    {
      id: 1,
      empId: 26790,
      firstName: 'Akshay',
      lastName: 'Shastrakar',
      email: 'akshay.shastrakar1@gmail.com',
      mobile: 9767986750,
      gender: 'male',
      designation: "UI Developer",
      address: "Pune"
    }, {
      id: 2,
      empId: 26791,
      firstName: 'Ram',
      lastName: 'Udgire',
      email: 'akshay.shastrakar1@gmail.com',
      mobile: 9767986750,
      gender: 'male',
      designation: "UI Developer",
      address: "Pune"
    },
    {
      id: 3,
      empId: 26792,
      firstName: 'Ravi',
      lastName: 'Kalurkar',
      email: 'akshay.shastrakar1@gmail.com',
      mobile: 9767986750,
      gender: 'male',
      designation: "UI Developer",
      address: "Pune"
    },
    {
      id: 4,
      empId: 26793,
      firstName: 'Gaurav',
      lastName: 'Kurwade',
      email: 'akshay.shastrakar1@gmail.com',
      mobile: 9767986750,
      gender: 'male',
      designation: "UI Developer",
      address: "Pune"
    },
    {
      id: 5,
      empId: 26794,
      firstName: 'Adesh',
      lastName: 'Ratnmal',
      email: 'akshay.shastrakar1@gmail.com',
      mobile: 9767986750,
      gender: 'male',
      designation: "UI Developer",
      address: "Pune"
    }
  ];

  constructor(private firestore: AngularFirestore) { }

  getEmployeeData() {
    // return this.empData;
    // return this.firestore.collection('EmployeeDB').valueChanges(); // will return data but not id
    return this.firestore.collection('EmployeeDB').snapshotChanges();

  }

  addEmployee(emp: any) {
    // this.empData.push(emp);
    this.firestore.collection('EmployeeDB').add(emp);
  }

  updateEmployee(emp: any) {
    this.firestore.doc('EmployeeDB/' + emp.id).update(emp);
  }

  deleteEmployee(id: string) {
    this.firestore.doc('EmployeeDB/' + id).delete();
  }

  getEmployeeById(id: string){
    return this.firestore.collection('EmployeeDB').doc('2xipMT8rPffMyFPkFt7S').valueChanges();
  }
}
