import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {
  host:string;
  constructor(private http: Http) {
    // this.host="192.168.43.190";
    this.host="192.168.0.103";
    //this.host="localhost";
}
  //retrieving contacts
  getContacts(){
    return this.http.get('http://'+this.host+':3000/api/contacts').map(res=> res.json());
  }

  addContact(newContact)
  {
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://'+this.host+':3000/api/contact', newContact,{headers:headers})
    .map(res=> res.json());
  }
  //delete
  deleteContact(id){
    return this.http.delete('http://'+this.host+':3000/api/contact/'+id).map(res=> res.json());
  }
  //update
  updateContact(id, contact){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://'+this.host+':3000/api/contact/update/'+id, contact, {headers:headers}).map(res=> res.json());
  }
  //search
  searchContactById(id){
    var headers=new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://'+this.host+':3000/api/contact/search/'+id,{headers:headers}).map(res=> res.json());
  }
}


