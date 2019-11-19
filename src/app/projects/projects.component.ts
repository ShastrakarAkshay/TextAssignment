import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any = [];
  formGroup: FormGroup;
  role: string;
  projectId: string;
  label:string;

  @ViewChild('closeModal', {static:false}) closeModal: ElementRef;

  constructor(private empService: EmployeeService, private toastr: ToastrService) { 
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      technologies: new FormControl('', Validators.required),
      client: new FormControl(''),
      location: new FormControl('', Validators.required)
    })

  }

  ngOnInit() {
    this.getProjects();
  }

  goBack(){
    window.history.back();
  }

  addProject(){
    this.label = "Create";
    this.projectId = "";
    this.formGroup.reset();
  }

  onSubmit(){
    console.log(this.label)
    if(this.label == "Update"){
      this.updateProject(this.formGroup.value);
    }else{
      this.createProject();
    }
  }
  
  createProject(){
    this.empService.addProject(this.formGroup.value);
    this.closeModal.nativeElement.click();
    this.toastr.success("Project Created!");
  }

  editProject(project: any){
    this.formGroup.reset();
    this.label = "Update";
    this.projectId = project.id;

    this.formGroup.setValue({
      name: project.name,
      description: project.description,
      technologies: project.technologies,
      client: project.client,
      location: project.location
    });
  }

  getProjects(){
    this.empService.getProjects().subscribe(data => {
      this.projects = data.map(project => {
        return {
          id: project.payload.doc.id,
          projectId: Number(project.payload.newIndex) + 1,
          ...project.payload.doc.data()
        }
      })
    })
  }

  updateProject(project: any){
    project.id = this.projectId;
    this.empService.updateProject(project);
    this.closeModal.nativeElement.click();
    this.toastr.success("Project Updated!");
  }

  deleteProject(projectId: string){
    this.empService.deleteProject(projectId);
    this.toastr.info('Project Deleted');
  }
}
