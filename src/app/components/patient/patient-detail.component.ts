import { ChangeDetectionStrategy, AUTO_STYLE, Component, Input, Output, EventEmitter, trigger, state, style, animate, transition  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Patient, PatientBackendService} from './patient.service';
import { NotificationService  } from '../../core/notification.service';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
//import { PatientFormComponent } from './patient-form.component'
import { PatientStore, PatientFormPage } from '../state/PatientStore';
import {List} from 'immutable';
import {asObservable} from "../state/asObservable";
import * as Rx from "rxjs/Rx";
import {ICON_CLASS, ICON_CLASS_BG} from '../../shared/constants/app.constants';
import {PATIENT_OWNER} from '../../shared/constants/app.constants';
import {MdIconRegistry} from '@angular/material';
import { ActivatedRoute, Params  }    from '@angular/router';
import 'rxjs/add/operator/switchMap';
//import {IPaginationInstance} from 'ng2-pagination';
@Component({
    selector: 'patient-detail',
    providers: [MdIconRegistry],
    templateUrl: 'patient-detail.component.html',
    host: { '[hidden]': 'hidden' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.6s ease-in')
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(100%)' }))
            ])
        ]),
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),
        trigger('openClose', [
            state('collapsed, void',
                style({ height: '0px', color: 'lightgreen' })),
            state('expanded',
                style({ height: AUTO_STYLE, color: 'red' })),
            transition('collapsed <=> expanded', [
                animate(1000)
            ])
        ])
    ]
})


export class PatientDetailComponent {
    /**
    * True to show the source code for the example
    */
    public showSource: boolean = false;
    private showTabs: boolean = false;
    animationState: string;
    private patientList: Patient[];
    patient: Patient;
    public patientFormPage = PatientFormPage;
    iconClass: string = ICON_CLASS; 
    iconClassBg: string = ICON_CLASS_BG; 
    owner: string = PATIENT_OWNER;
    title: string;
    toggleID: number;

    private _patients: Rx.BehaviorSubject<Patient> = new Rx.BehaviorSubject(null);
    constructor(private route: ActivatedRoute, private mdIconRegistry: MdIconRegistry, private patientService: PatientBackendService, private notificationService: NotificationService, private patientStore: PatientStore) {

        mdIconRegistry.addSvgIcon('M', 'assets/images/svg/human-male.svg');
        mdIconRegistry.addSvgIcon('F', 'assets/images/svg/human-female.svg');

    }

    ngOnInit() {
        let id = parseInt(this.route.snapshot.params['id'], 10);
        this.patientStore.getPatient(id);
      this.patientStore.getAllPatients().subscribe(
            people => this.patientList = people,
            error => console.error('Error: '),
            () => {this._patients.next(this.patientList['content'].find(x => x.id == id)); console.log("this.patient", this._patients)}); 
         
        
//         console.log("patientStore patients() ", this.patientStore.patients.getValue() );
    }

    setPatientFormPage(page: PatientFormPage) {
        this.patientStore.setPatientFormPage(page);
    }

}
