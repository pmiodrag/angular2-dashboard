import { Component } from '@angular/core';
import { PatientStore, PatientFormPage } from './PatientStore';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'patient-detail-personal',
    templateUrl: 'patient-detail-personal.component.html'   
})

export class PatientDetailPersonalComponent {
    constructor(private patientStore: PatientStore) {
        this.patientStore.setPatientFormPage(PatientFormPage.Personal);
    }


}
