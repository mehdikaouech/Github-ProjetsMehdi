import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  // Get all objects
  getAllContacts() {
    return this.httpClient.get<{ message: string, contacts: any }>(`${this.contactURL}/api/contacts`);
  }

  //Get one Object
  getContactById(id: string) {
    return this.httpClient.get<{ contact: any }>(`${this.contactURL}/api/getContact/${id}`);
  }

  // Add object to DB
  addContact(contact: any) {
    return this.httpClient.post<{message:string}>(`${this.contactURL}/api/addContact`, contact);
  }

  // Delete Contact
  deleteContact(id: string) {
    return this.httpClient.delete(`${this.contactURL}/api/deleteContact/${id}`);
  }

  editContact(contact:any){
    return this.httpClient.put(`${this.contactURL}/api/editContact/${contact.id}`, contact);

  }
}
