import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { TreatmentService } from '../../services/treatmentService';
//import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
//import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
//import { TrimPipe } from '../../shared/pipes/trim.pipe';
//import {MATERIAL_DIRECTIVES} from "ng2-material/index";
//import { PatientFormComponent } from './patient-form'
//import { PatientList } from './patient-list'
//import { PatientHeaderComponent } from './patient-header'
import { Patient} from './patient.service';
import { NotificationService  } from '../../core/notification.service';
import { AuthService } from '../auth/auth.service';
@Component({ 
  selector: 'patients', 
  templateUrl: 'patient.component.html',
  host: {'[hidden]': 'hidden'}
})

export class PatientComponent {
    selectedPatient: Patient;
    subscription: any;
    @Input() patients: Patient[];
    
    
   // @Output() openForm = new EventEmitter<string>();
   // formAction : string;
    constructor( public authService: AuthService, private notificationService: NotificationService ) { }
//    ngOnInit() {
//        this.subscription = this.notificationService.getFormActionChangeEmitter()
//          .subscribe(formAction => this.onFormActionChange(formAction));
//    }
//    onFormActionChange(item: string) {
//        console.log("selectedNavItem patient component item = ", item, "selectedPatient", this.selectedPatient);
//    }
//    ngOnDestroy() {
//        this.subscription.unsubscribe();
//    }
}

