import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajorListComponent } from './major/major-list/major-list.component';
import { MajorDetailComponent } from './major/major-detail/major-detail.component';
import { MajorCreateComponent } from './major/major-create/major-create.component';
import { MajorEditComponent } from './major/major-edit/major-edit.component';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { MajorCodeComponent } from './major/major-code/major-code.component';

const routes: Routes = [
  {path: "",redirectTo:"/majors/list", pathMatch: "full"},//Login in capstone
  {path: "majors/list", component: MajorListComponent },
  {path: "majors/detail/:id", component: MajorDetailComponent },
  {path: "majors/code", component: MajorCodeComponent},
  {path: "majors/create", component: MajorCreateComponent },
  {path: "majors/edit/:id", component: MajorEditComponent },
 
  {path: "students/list", component: StudentListComponent },
  {path: "students/detail/:id", component: StudentDetailComponent },
  {path: "students/create", component: StudentCreateComponent },
 
  {path: "students/edit/:id", component: StudentEditComponent },
  {path: "**", component: StudentListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
