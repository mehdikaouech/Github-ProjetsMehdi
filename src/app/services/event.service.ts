import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventURL = 'http://localhost:3000';


  constructor( private httpClient:HttpClient) { }
    // Get all objects
    getAllevents() {
      return this.httpClient.get<{ message: string, events: any }>(`${this.eventURL}/api/events`);
    }
  
    //Get one Object
    getEventById(id: string) {
      return this.httpClient.get<{ event: any }>(`${this.eventURL}/api/getEvent/${id}`);
    }
  
    // Add object to DB
    addEvent(event: any, image:File) {
      const formData = new FormData();
      formData.append('title', event.title);
      formData.append('description', event.description);
      formData.append('address', event.address);
      formData.append('eventDate', event.eventDate);
      formData.append('eventTime', event.eventTime);
      formData.append('image', image);

      return this.httpClient.post<{message:string}>(`${this.eventURL}/api/addEvent`, formData);
    }
  
    // Delete event
    deleteEvent(id: string) {
      return this.httpClient.delete<{message:string}>(`${this.eventURL}/api/deleteEvent/${id}`);
    }
  
    editEvent(event:any){
      return this.httpClient.put(`${this.eventURL}/api/editEvent/${event._id}`, event);
  
    }
    public updateEvent(event: any){
      return this.httpClient.put<{message : string}>(`${this.eventURL + '/api/editEvent'}/${event.id}`, event)}
    
    
}
