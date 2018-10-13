import { UserDataImpl } from '../sign-up-complete/iuser-data';
export interface ILoginResult{
    result:String;
    data:UserDataImpl;
}

export class LoginResultImpl implements ILoginResult{
    constructor(public result:string, public data:UserDataImpl){}
}
