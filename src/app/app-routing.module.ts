import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';
//import { PatientsComponent } from './components/patients/patients';
//import { TreatmentsComponent } from './components/treatments/treatments';
//import { DiagnoseComponent } from './components/diagnose/diagnose';
//import { DoctorsComponent} from './components/doctors/doctors';
//import { DocumentsComponent} from './components/documents/documents';
//import { AgendaComponent} from './components/agenda/agenda';
//import { AuthComponent } from './components/auth/auth.component';


export const appRoutes: Routes = [
    {
       path: '',
       pathMatch: 'full',
       redirectTo: 'dashboard',
     },
    { path: 'patients', loadChildren: 'app/components/patient/patient.module#PatientModule'},
//    { path: 'patient/:id/gallery', component: GalleryComponent },
//    { path: 'patient/:owner/:id/treatments', component: TreatmentsComponent },
//    { path: 'doctor/:owner/:id/treatments', component: TreatmentsComponent },
//    { path: 'diagnoses', component: DiagnoseComponent },
//    { path: 'doctors', component: DoctorsComponent },
//    { path: 'documents', component: DocumentsComponent },
//    { path: 'agenda', component: AgendaComponent },
//    { path: 'login', component: AuthComponent },
    { path: 'dashboard', component: DashboardComponent },
//     { path: '**', pathMatch: 'full', component: DashboardComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routedComponents = [DashboardComponent, PatientsComponent, TreatmentsComponent, DiagnoseComponent, DoctorsComponent, DocumentsComponent, AgendaComponent, AuthComponent, PageNotFoundComponent];



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/