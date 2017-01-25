import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { FilterTextboxComponent } from './filterTextbox.component';
import { DoctorHeaderComponent } from './doctor-header.component';
import { DoctorDetailComponent } from './doctor-detail.component';
import { DoctorListComponent } from './doctor-list.component';
import { DoctorFormComponent } from './doctor-form.component';
import { DoctorRoutingModule }   from './doctor-routing.module';
import { SharedModule }        from '../../shared/shared.module';
import { DoctorBackendService} from './doctor.service';
import { DoctorStore } from '../state/DoctorStore';
import { MaterialModule } from '@angular/material';
import {CalendarModule} from 'primeng/primeng';
import { Md2Module }  from 'md2';
@NgModule({
    imports: [ SharedModule.forRoot(), MaterialModule.forRoot(), DoctorRoutingModule, CalendarModule, Md2Module.forRoot() ],
    declarations: [
        DoctorComponent,
        DoctorHeaderComponent,
        DoctorListComponent,
        DoctorDetailComponent,
        DoctorFormComponent,
        FilterTextboxComponent
    ],
    providers: [DoctorBackendService, DoctorStore],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DoctorModule {
}
