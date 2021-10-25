// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EtudiantService {
//  // SERVER_URL: string = "http://localhost:8080/api/";
//    etudiantURL:string="http://localhost:3000";

//   constructor(private httpClient: HttpClient) { }
//   public getetudiants(){ 
//     return this.httpClient.get<{etudiants:any}>(this.etudiantURL + '/api/etudiants');

// }
// public getEtudiant(etudiantId:any){
//   return this.httpClient.get<{etudiant:any}>(`${this.etudiantURL + '/api/allEtudiant'}/${etudiantId}`); 
// }
// public createEtudinat(etudiant: any, img:File){
  
//   let formData = new FormData();

//     formData.append('name',etudiant.nom);
//     formData.append('email',etudiant.prenom);
//     formData.append('tel',etudiant.tel);
//     formData.append('tel',etudiant.email);
//     formData.append('img',img);

   

//   return this.httpClient.post<{message : string}>(`${this.etudiantURL + '/api/addEtudiant'}`, formData);
// }


// public deleteEtudiant(etudiantId:any){
  
//   return this.httpClient.delete<{message : string}>(`${this.etudiantURL + '/api/deleteEtudiant'}/${etudiantId}`)

// }
// public updateEtudiant(etudiant: any){
//   return this.httpClient.put<{message : string}>(`${this.etudiantURL + '/api/editEtudiant'}/${etudiant.id}`, etudiant)}

// }