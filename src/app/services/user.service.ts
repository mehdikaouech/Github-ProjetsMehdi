import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 // SERVER_URL: string = "http://localhost:8080/api/";
 userURL:string="http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  


  public getusers(){ 

    return this.httpClient.get<{users:any}>(this.userURL + '/api/allUsers');


}

public getadmins(){ 

  return this.httpClient.get<{users:any}>(this.userURL + '/api/alladmins');


}

public getetudiants(){ 

  return this.httpClient.get<{users:any}>(this.userURL + '/api/alletudiants');


}
public getensignants(){ 

  return this.httpClient.get<{users:any}>(this.userURL + '/api/allensignants');


}

public getUser(userId:any){
  console.log("from service",userId);
  
  return this.httpClient.get<{user:any}>(`${this.userURL + '/api/allUser'}/${userId}`); 
}
public createUser(user: any){
  
  return this.httpClient.post<{message : string}>(`${this.userURL + '/api/addUser'}`, user);
}




public deleteUser(userId:any){

  return this.httpClient.delete<{message : string } >(`${this.userURL + '/api/deleteUser'}/${userId}`)
  

}

public updateUser(user: any){
  return this.httpClient.put<{message : string}>(`${this.userURL + '/api/editUser'}/${user.id}`, user)}



  public login(login:any){
    console.log('login');
    return this.httpClient.post<{message:string,user:any,token:any}>(this.userURL + '/api/login' , login); 

  }
  
public chercher(session: any){
  

  
    return this.httpClient.post<{message : string}>(`${this.userURL + '/api/getEtudiantBy'}`, session);}

  isLoggedIn(){ 
    let token = localStorage.getItem("mytoken"); 
    location.reload
    if (token) {
    location.reload
      return true ;
    } else {
         location.reload
      return false;
    }
  }
  isAdmin(){ 
    let role = localStorage.getItem("role"); 
    if (role=='Admin') {
      return true ;
    } else {
      return false;
    }
  }
  isEnseignant(){ 
    let role = localStorage.getItem("role"); 
    if (role=='Enseignant') {
      return true ;
    } else {
      return false;
    }
  }
  isEtudiant(){ 
    let role = localStorage.getItem("role"); 
    if (role=='Etudiant') {
    
      return true ;
    } else {
      return false;
    }
  }
  relod(){
    location.reload
  }
}


