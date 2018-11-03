import { Injectable} from '@angular/core';
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import { UserDataImpl } from './sign-up-complete/iuser-data';
@Injectable()
export class DataService{

    constructor() {}

    private signUpFormData=new BehaviorSubject<any>(null);
    currentSignUpFormData=this.signUpFormData.asObservable();


    changeSignUpFormData(data : any){
        JSON.stringify({data})
        this.signUpFormData.next(data);
    }

    private navControl=new BehaviorSubject<any>(null);
    currentNavControl=this.navControl.asObservable();


    changeNavControl(data : boolean){
        this.navControl.next(data);
    }

    private loginData= new BehaviorSubject<any>(null);
    currentLoginData=this.loginData.asObservable();

    changeLoginData(data : any){
        this.loginData.next(data);
    }
}