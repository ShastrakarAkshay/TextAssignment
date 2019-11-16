import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) { }

  getEmployeeData() {
    // return this.empData;
    // return this.firestore.collection('EmployeeDB').valueChanges(); // will return data but not id

    // FETCH DATA ORDER BY FIELD "address"
    // let data = this.firestore.collection('EmployeeDB').ref.orderBy('address').onSnapshot(data => {
    //   data.forEach(item => {
    //     console.log(item.data())
    //   })
    // })

    // FETCH DATA WHERE FIELD NAME "firstName" = "Akshay"
    // let data = this.firestore.collection('EmployeeDB').ref.where('firstName', '==' ,'Akshay').onSnapshot(data => {
    //   data.forEach(item => {
    //     console.log(item.data())
    //   })
    // })  
    
    return this.firestore.collection('EmployeeDB', ref => ref.orderBy('firstName', 'asc')).snapshotChanges();

  }

  addEmployee(emp: any) {
    // this.empData.push(emp);
    this.firestore.collection('EmployeeDB').add(emp).then(ref => {
      ref.set({ id: ref.id }, { merge: true });
    });
  }

  updateEmployee(emp: any) {
    this.firestore.doc('EmployeeDB/' + emp.id).update(emp);
  }

  deleteEmployee(id: string) {
    this.firestore.doc('EmployeeDB/' + id).delete();
  }

  getEmployeeById(id: string) {
    return this.firestore.collection('EmployeeDB').doc(id).snapshotChanges();
  }

  getUsers(){
    const AdminId = 'YgENdKFolwTLII94HWeK';
    const PublicId = 'XQuNXevLlSKiTjfN8tp5';

    return this.firestore.collection("users").snapshotChanges();
  }

  isLogin(){
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
