import { Injectable} from '@angular/core';
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class DataService{

    private signUpFormData=new BehaviorSubject<any>(null);
    currentSignUpFormData=this.signUpFormData.asObservable();


    changeSignUpFormData(data : any){
        JSON.stringify({data})
        this.signUpFormData.next(data);
    }

    private navControl=new BehaviorSubject<any>(null);
    currentNavControl=this.navControl.asObservable();

    constructor() {}

    changeNavControl(data : boolean){
        this.navControl.next(data);
    }
}