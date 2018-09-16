export interface IPersonalForm {
      firstname: string,
      lastname: string,
      email:string,
      contactNo:number,
      password: string,
      confirm_password:string
}
export class PersonalFormImpl implements IPersonalForm {
    constructor(public firstname: string, public lastname: string, public email: string, public contactNo: number, public password: string, public confirm_password: string) { }
}


