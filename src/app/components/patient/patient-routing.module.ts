import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientListComponent } from './patient-list.component';
import { PatientDetailComponent } from './patient-detail.component';
import { PatientFormComponent } from './patient-form.component';

const routes: Routes = [
  { path: '',
    component: PatientComponent,
    children: [
      { path: '',    component: PatientListComponent },
      { path: 'form', component: PatientFormComponent },
      { path: ':id', component: PatientDetailComponent }
      
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientRoutingModule { }
