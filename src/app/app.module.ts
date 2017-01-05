import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
//import { FormsModule }   from '@angular/forms';
//import { HttpModule }    from '@angular/http';
//import { RouterModule }   from '@angular/router';
//import { Ng2PaginationModule } from 'ng2-pagination'
//import { FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
//import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';
//import { AuthComponent } from './components/auth/auth.component';

//import { PatientBackendService } from './services/PatientBackendService';
//import { PatientStore } from './components/state/PatientStore';
//import { DoctorBackendService } from './services/DoctorBackendService';
//import { DoctorStore } from './components/state/DoctorStore';
//import { GalleryStore } from './components/state/GalleryStore';
//import { GalleryBackendService } from './services/GalleryBackendService';
//import { TreatmentBackendService } from './services/TreatmentBackendService';
//import { AgendaBackendService } from './services/AgendaBackendService';
//import { DiagnoseBackendService } from './services/DiagnoseBackendService';
//import { TreatmentStore } from './components/state/TreatmentStore';
//import { DiagnoseStore } from './components/state/DiagnoseStore';
//import { AgendaStore } from './components/state/AgendaStore';
//import { UiStateStore } from './components/state/UiStateStore';
import { AppRoutingModule } from './app-routing.module';
import { PatientModule } from './components/patient/patient.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './components/auth/auth.module';
//import { PatientFormComponent } from './components/patients/patient-form'
//import { PatientList } from './components/patients/patient-list'
//import { PatientHeaderComponent } from './components/patients/patient-header'
//import { TreatmentsComponent } from './components/treatments/treatments';
//import { TreatmentListComponent } from './components/treatments/treatment-list'
//import { TreatmentFormComponent } from './components/treatments/treatment-form'
//import { DiagnoseComponent } from './components/diagnose/diagnose';
//import { DiagnoseListComponent} from "./components/diagnose/diagnose-list"
//import { DoctorsComponent } from './components/doctors/doctors';
//import { DoctorFormComponent } from './components/doctors/doctor-form'
//import { DoctorList } from './components/doctors/doctor-list'
//import { DoctorHeaderComponent } from './components/doctors/doctor-header'
//import { DocumentsComponent} from './components/documents/documents';
//import { AgendaModule} from './components/agenda/agenda.module';
//import { AuthComponent } from './components/auth/auth.component';
//import { Dashboard } from './components/dashboard/dashboard';
//import { GalleryComponent } from './components/gallery/gallery';
//import { GalleryPreview }     from './components/gallery/gallery-preview';
//import { GalleryUpload }   from './components/gallery/gallery-upload';
//import {SharedModule}  from './shared/modules/shared.module'
//import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    
    CoreModule.forRoot(),
    MaterialModule.forRoot(),
    SharedModule.forRoot(),
    AuthModule.forRoot(),
    AppRoutingModule,
    /* Eagerly loaded module, others are laoded lazy */
    DashboardModule
  
//    StoreModule.forRoot()
  ],
  declarations: [
    AppComponent,
//    AuthComponent
//    routedComponents,
//    PatientsComponent,
//    PatientFormComponent,
//    PatientList,
//    PatientHeaderComponent,
//    TreatmentsComponent,
//    TreatmentListComponent,
//    TreatmentFormComponent,
//    DiagnoseComponent,
//    DiagnoseListComponent,
//    DoctorsComponent,
//    DoctorHeaderComponent, 
//    DoctorList,
//    DoctorFormComponent,
//    DocumentsComponent,
//    AgendaModule,
//    AuthComponent,
//    GalleryComponent,
//    GalleryPreview,
//    GalleryUpload,
//    Dashboard,
//    FileSelectDirective    
  ],
 
  schemas:   [ CUSTOM_ELEMENTS_SCHEMA ],
 bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/