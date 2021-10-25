import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmploisService {

  constructor(private httpClient: HttpClient) { }

  emploisURL:string="http://localhost:3000";
  
 public createEmplois(emplois: any,img:File){
  
  let formData = new FormData();

    formData.append('idSession',emplois.idSession);
   
    formData.append('img',img);

  return this.httpClient.post<{message : string}>(`${this.emploisURL + '/api/addEmplois'}`, formData);
}
public getEmplois(emploisId:any){
    
  return this.httpClient.get<{emplois:any}>(`${this.emploisURL + '/api/allEmplois'}/${emploisId}`); 
}



public updateEmplois(emplois: any){
console.log("uppppdate" );

return this.httpClient.put<{message : string}>(`${this.emploisURL + '/api/editEmplois'}/${emplois.id}`,emplois)

}




public getemplois(){ 

return this.httpClient.get<{emplois:any}>(this.emploisURL + '/api/allemplois');


}
public deleteEmplois(emploisId:any){
 
  return this.httpClient.delete<{message : string } >(`${this.emploisURL + '/api/deleteEmplois'}/${emploisId}`)
  
  
  }
}
