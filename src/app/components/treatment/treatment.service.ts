import {Injectable,Inject} from '@angular/core';
import  {Http,Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
export interface ITreatment {
    id: number; 
    patientid : number;
    doctorid: number; 
    treatmentdate: Date;
    therapy: string;
    diagnoseid: number;
    price: string;
}

export class Treatment implements ITreatment {
    constructor (public id: number, public patientid : number, public doctorid: number, public treatmentdate: Date, public therapy: string, 
        public diagnoseid: number, public price: string) {
    }
}

@Injectable()
export class TreatmentBackendService {

    http:Http;
    baseUrl: string;
    constructor(http:Http)  {
        this.http = http;
        this.baseUrl = '/api/treatments/'
    }

    getAllTreatments() {        
        return this.http.get(this.baseUrl);
    }

    saveTreatment(newTreatment: Treatment) : Observable<Response> {
        let body = JSON.stringify( newTreatment )
        console.log("body", body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post((this.baseUrl), body, options);
    }
    
    updateTreatment (treatment: ITreatment) : Observable<Response>  {
//
        let body = JSON.stringify( treatment )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put((this.baseUrl + treatment.id), body, options)
                         .share()
    }   
//   

    deleteTreatment(deleteTreatment: Treatment) : Observable<Response> {
        return this.http.delete(this.baseUrl + deleteTreatment.id).share();
    }    
   
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}