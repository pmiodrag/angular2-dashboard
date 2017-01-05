import { Component } from '@angular/core';
//import { CORE_DIRECTIVES} from '@angular/common';
//import { ROUTER_DIRECTIVES } from '@angular/router';
//import { PatientsComponent } from './components/patients/patients';
//import { TreatmentsComponent } from './components/treatments/treatments';
//import { DiagnoseComponent } from './components/diagnose/diagnose';
//import {DoctorsComponent} from './components/doctors/doctors';
//import {DocumentsComponent} from './components/documents/documents';
//import {AgendaComponent} from './components/agenda/agenda';
//import { AuthComponent } from './components/auth/auth.component';
//import { Dashboard } from './components/dashboard/dashboard';
//import { GalleryComponent } from './components/gallery/gallery';
import { AuthService } from './components/auth/auth.service';
@Component({ 
    selector: 'app-container',
    templateUrl: 'app.component.html' 
})
export class AppComponent {
  mobileView:number = 992;
  toggle:boolean = false;
  profile: string;
  pacientDisplayModeEnabled: boolean;
  id:string;
  firstname:string;
  lastname:string;
  constructor(public authService: AuthService) {
    this.attachEvents();
  }

  ngOnInit() {   
    this.pacientDisplayModeEnabled = true;  
    console.log('ngOnInit app');
  }

  attachEvents() {
    window.onresize = ()=> {
      if (this.getWidth() >= this.mobileView) {
        if (localStorage.getItem('toggle')) {
          this.toggle = !localStorage.getItem('toggle') ? false : true;
        } else {
          this.toggle = true;
        }
      } else {
        this.toggle = false;
      }
    }
  }

  getWidth() {
    return window.innerWidth;
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    localStorage.setItem('toggle', this.toggle.toString());
  }
  
}
