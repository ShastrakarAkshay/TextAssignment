import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeResumeComponent } from './employee-resume/employee-resume.component';
import { AuthGuard } from './guards/auth.guard';
import { ProjectsComponent } from './projects/projects.component';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "empList",
    component: EmployeeListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'empDetails/:id',
    component: EmployeeDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'resume/:id',
    component: EmployeeResumeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "notfound",
    component: PageNotFoundComponent
  },
  {
    path: "addProject",
    component: ProjectsComponent,
    canActivate: [AdminGuard]
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
