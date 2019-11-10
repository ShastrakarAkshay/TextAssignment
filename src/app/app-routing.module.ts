import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeResumeComponent } from './employee-resume/employee-resume.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "empList",
    component: EmployeeListComponent
  },
  {
    path: 'empList/empDetails',
    component: EmployeeDetailsComponent
  },
  {
    path: 'empList/empDetails/resume',
    component: EmployeeResumeComponent
  },
  {
    path: "notfound",
    component: PageNotFoundComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
