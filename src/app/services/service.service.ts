import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  serviceURL:string="http://localhost:3000";
  
  public createService(service: any){
  
    console.log(service);
    
     return this.httpClient.post<{message : string}>(`${this.serviceURL + '/api/addService'}`, service);}
  
     
  //    public getserviceByid(id:any){ 

  //     return this.httpClient.get<{services:any}>(`${this.serviceURL + '/api/Servicebyid'}/${id}`); 
  
  // }




  public getserviceByid(){ 

    return this.httpClient.get<{services:any}>(this.serviceURL + '/api/allServices');


}

     public getservice(){ 

      return this.httpClient.get<{services:any}>(this.serviceURL + '/api/allServices');
  
  
      
  }
  public getServices(idEtudiant:any){
   
    return this.httpClient.get<{services:any}>(`${this.serviceURL + '/api/Servicebyid'}/${idEtudiant}`); 
  }
  
 

  
public traiterService(serviceId: any) {
  let edit = `${this.serviceURL + '/api/Service/traitement'}/${serviceId}`;
  console.log(edit)
  return this.httpClient.get(edit);
}

  public getService(serviceId:any){
    return this.httpClient.get<{service:any}>(`${this.serviceURL + '/api/allService'}/${serviceId}`); 
  }
  
  
  
  
  
  public deleteService(serviceId:any){
  
    return this.httpClient.delete<{message : string } >(`${this.serviceURL + '/api/deleteService'}/${serviceId}`)
    
  
  }
  public updateService(service: any){
    return this.httpClient.put<{message : string}>(`${this.serviceURL + '/api/editService'}/${service.id}`, service)}
  
  }
  

