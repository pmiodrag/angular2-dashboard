import { ChangeDetectionStrategy, AUTO_STYLE, Component, Input, Output, EventEmitter, trigger, state, style, animate, transition  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Doctor, DoctorBackendService} from './doctor.service';
import { NotificationService  } from '../../core/notification.service';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { DoctorStore, DoctorFormPage } from '../state/DoctorStore';
import {List} from 'immutable';
import {asObservable} from "../state/asObservable";
import * as Rx from "rxjs/Rx";
import {ICON_CLASS, ICON_CLASS_BG} from '../../shared/constants/app.constants';
import {PATIENT_OWNER} from '../../shared/constants/app.constants';
import {MdIconRegistry} from '@angular/material';
import { ActivatedRoute, Params  }    from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'doctor-detail',
    providers: [MdIconRegistry],
    templateUrl: 'doctor-detail.component.html',
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


export class DoctorDetailComponent {
    /**
    * True to show the source code for the example
    */
    public showSource: boolean = false;
    private showTabs: boolean = false;
    animationState: string;
    private doctorList: Doctor[];
    doctor: Doctor;
    public doctorFormPage = DoctorFormPage;
    iconClass: string = ICON_CLASS; 
    iconClassBg: string = ICON_CLASS_BG; 
    owner: string = PATIENT_OWNER;
    title: string;
    toggleID: number;

    private _doctors: Rx.BehaviorSubject<Doctor> = new Rx.BehaviorSubject(null);
    constructor(private route: ActivatedRoute, private mdIconRegistry: MdIconRegistry, private doctorService: DoctorBackendService, private notificationService: NotificationService, private doctorStore: DoctorStore) {

        mdIconRegistry.addSvgIcon('M', 'assets/images/svg/human-male.svg');
        mdIconRegistry.addSvgIcon('F', 'assets/images/svg/human-female.svg');

    }

    ngOnInit() {
        let id = parseInt(this.route.snapshot.params['id'], 10);
        this.doctorStore.getDoctor(id);
      this.doctorStore.getAllDoctors().subscribe(
            people => this.doctorList = people,
            error => console.error('Error: '),
            () => {this._doctors.next(this.doctorList['content'].find(x => x.id == id)); console.log("this.doctor", this._doctors)}); 
         
    }

    setDoctorFormPage(page: DoctorFormPage) {
        this.doctorStore.setDoctorFormPage(page);
    }

}
