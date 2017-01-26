import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
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

