import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router, Params  }  from '@angular/router';
@Component({ 
  selector: 'treatment',
  templateUrl: 'treatment.component.html'
})
export class TreatmentComponent {
    
    private patientID: number;
    constructor(private router: Router, public authService: AuthService, private route: ActivatedRoute) {
    }   
    
    ngOnInit() {
           this.route.parent.parent.params.subscribe(params => {
            console.log("Params", params)
            this.patientID = +params['id']; // (+) converts string 'id' to a number
            console.log("ngOnInit TreatmentComponent", this.patientID);
        });
        
     
    }
}