import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { DoctorListComponent } from './doctor-list.component';
import { DoctorDetailComponent } from './doctor-detail.component';
import { DoctorFormComponent } from './doctor-form.component';

const routes: Routes = [
  { path: '',
    component: DoctorComponent,
    children: [
      { path: '',    component: DoctorListComponent },
      { path: 'form', component: DoctorFormComponent },
      { path: ':id', component: DoctorDetailComponent }
      
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorRoutingModule { }
