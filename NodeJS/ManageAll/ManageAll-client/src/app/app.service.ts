import { Injectable} from '@angular/core';
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class DataService{

    private signUpFormData=new BehaviorSubject<any>(null);
    currentSignUpFormData=this.signUpFormData.asObservable();

    constructor() {}

    changeSignUpFormData(data : any){
        this.signUpFormData.next(data);
    }
}