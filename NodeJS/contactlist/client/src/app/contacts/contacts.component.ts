import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';


@Component({
  selector: 'app-contacts',
  providers: [ContactService],
  templateUrl:'./contacts.component.html',
  styleUrls: ['./contacts.component.css']
  
})

export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name:string;
  last_name:string;
  phone:string;
  _id:string;
  updateById:boolean;
  addNewContact:boolean;

  constructor(private contactService: ContactService) { }

  addContact(){
    const newContact={
      first_name:this.first_name,
      last_name:this.last_name,
      phone:this.phone
    }
    this.contactService.addContact(newContact)
      .subscribe(contact =>{
        this.contacts.push(contact);
        this.contactService.getContacts()
        .subscribe( contacts => 
        this.contacts= contacts);
      this.first_name=null;
      this.last_name=null;
      this.phone=null;
      });
  }

  deleteContact(id:any){
    var contacts=this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data =>{
        if(data.n==1){
          for(var i=0; i<contacts.length;i++){
            if(contacts[i]._id==id){
              contacts.splice(i,1);
            }
          }
        }
      });
  }
  updateContact(id:any){
    var contacts=this.contacts;
    const newContact={
      first_name:this.first_name,
      last_name:this.last_name,
      phone:this.phone
    }
    console.log("Updating contact for id :"+id);
    this.contactService.updateContact(id, newContact).subscribe(contact =>{
      // if(contact.n==1){
        for(var i=0; i<contacts.length;i++){
          if(contacts[i]._id==id){
            contacts[i].first_name=contact.first_name;
            contacts[i].last_name=contact.last_name;
            contacts[i].phone=contact.phone;
            console.log('here');
            // contacts.splice(i,1);
            // contacts.push(contact);
          }
          console.log(contacts);
        // }
      }
      this.first_name=null;
      this.last_name=null;
      this.phone=null;
      this.updateById=false;
    });
  }
  searchContactById(id:any){
    
    this.contactService.searchContactById(id).subscribe(contact =>{
      this._id=contact._id;
      this.first_name=contact.first_name;
      this.last_name=contact.last_name;
      this.phone=contact.phone;
      this.updateById=true;
      this.addNewContact=false;
    });
  }
  cancelUpdateContact(){
    this.first_name=null;
    this.last_name=null;
    this.phone=null;
    this.updateById=false;
    this.addNewContact=true;
  }
  ngOnInit() {
    
    this.contactService.getContacts()
      .subscribe( contacts => 
      this.contacts= contacts);
      this.addNewContact=true;
  }

}
