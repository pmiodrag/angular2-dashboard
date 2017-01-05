import { NgModule, ModuleWithProviders } from '@angular/core';
import { PatientStore } from './PatientStore';
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
@NgModule({
    providers: [
        PatientStore,
//        DoctorStore,
//        TreatmentStore,
//        DiagnoseStore,
//        GalleryStore,
//        AgendaStore
    ],
})
export class StoreModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule
    };
  }
}
