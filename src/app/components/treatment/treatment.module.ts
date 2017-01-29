import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TreatmentComponent } from './treatment.component';
import { SharedModule } from '../../shared/shared.module';
import { TreatmentRoutingModule }   from './treatment-routing.module';
import { TreatmentStore } from '../state/TreatmentStore';
import { TreatmentBackendService} from './treatment.service';
import { MaterialModule } from '@angular/material';
@NgModule({
    imports: [SharedModule.forRoot(), MaterialModule.forRoot(), TreatmentRoutingModule],
    declarations: [
        TreatmentComponent
    ],
    providers: [TreatmentBackendService, TreatmentStore],
    exports: [
        TreatmentComponent
    ],    
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreatmentModule {
}
