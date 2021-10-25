

  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
import { formation } from '../models/formation';
import { session } from '../models/session';

  
@Injectable({
  providedIn: 'root'
})
export class FormationService {

 // SERVER_URL: string = "http://localhost:8080/api/";
 formationURL:string="http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  
  public createFormation(formation: formation){
  
 
    return this.httpClient.post<{message : string}>(`${this.formationURL + '/api/addFormation'}`, formation);}

    public getFormation(formationId:formation){
     
      return this.httpClient.get<{formation:formation}>(`${this.formationURL + '/api/allformation'}/${formationId}`); 
    }


    
  public updateFormation(formation: any){
    console.log("upppp" );
    
    return this.httpClient.put<{message : string}>(`${this.formationURL + '/api/editFormation'}/${formation.id}`, formation)
    
  }
  

    

  public getFormations(){ 

    return this.httpClient.get<{formations:formation}>(this.formationURL + '/api/allformations');


}

public deleteFormation(formationId:formation){

  return this.httpClient.delete<{message : string } >(`${this.formationURL + '/api/deleteFormation'}/${formationId}`)
  

}
// ....................................................................................................................
public createSession(session: any){
  
 console.log(session);
 
  return this.httpClient.post<{message : string}>(`${this.formationURL + '/api/addSession'}`, session);}

  public getSession(sessionId:session){
   
    return this.httpClient.get<{session:session}>(`${this.formationURL + '/api/allsession'}/${sessionId}`); 
  }

public updateSession(session: any){
  console.log("uppppdate" );
  
  return this.httpClient.put<{message : string}>(`${this.formationURL + '/api/editSession'}/${session.id}`,session)
  
}


  

public getSessions(){ 

  return this.httpClient.get<{sessions:any}>(this.formationURL + '/api/allsessions');


}

public deleteSession(sessionId:any){

return this.httpClient.delete<{message : string } >(`${this.formationURL + '/api/deleteSession'}/${sessionId}`)


}
// ...........................................
public createNote(note: any){
  
  console.log(note);
  
   return this.httpClient.post<{message : string}>(`${this.formationURL + '/api/addNote'}`, note);}
 
   public getNote(idEtudiant:any){
    
     return this.httpClient.get<{note:any}>(`${this.formationURL + '/api/allnote'}/${idEtudiant}`); 
   }
 
 
   
 public updateNote(note: any){
   console.log("uppppdate" );
   
   return this.httpClient.put<{message : string}>(`${this.formationURL + '/api/editSession'}/${note.id}`,note)
   
 }
 
 
   
 
 public getnotes(){ 
 
   return this.httpClient.get<{notes:any}>(this.formationURL + '/api/allnotes');
 
 
 }
 
 public deleteNote(noteId:any){
 
 return this.httpClient.delete<{message : string } >(`${this.formationURL + '/api/deleteNote'}/${noteId}`)
 
 
 }
//  .................................................................................


   public createtraveau(traveau:any, img:File){  

    let formData = new FormData();
  
      formData.append('idEnseignant',traveau.idEnseignant);
      formData.append('idEtudiant',traveau.idEtudiant);
      formData.append('nomEtudiant',traveau.nomEtudiant);
      formData.append('description',traveau.description);
   
      formData.append('prenomEtudiant',traveau.prenomEtudiant);
      formData.append('nomEnseignat',traveau.nomEnseignat);

      formData.append('img',img);
  
    return this.httpClient.post<{message : string}>(`${this.formationURL + '/api/addTraveau'}`, formData);
  }
     

   
 public getTraveaux(){ 
 
  return this.httpClient.get<{traveaux:any}>(this.formationURL + '/api/allTraveaux');


}

public getTraveau(idEtudiant:any){
   
  return this.httpClient.get<{traveau:any}>(`${this.formationURL + '/api/allTraveaux'}/${idEtudiant}`); 
}


 public updateTraveau(traveau: any){
  console.log("uppppdate" );
  
  return this.httpClient.put<{message : string}>(`${this.formationURL + '/api/editTraveau'}/${traveau.id}`,traveau)
  
}
public deleteTraveau(traveauid:any){
 
  return this.httpClient.delete<{message : string } >(`${this.formationURL + '/api/deletetraveau'}/${traveauid}`)
  
  
  }

// public chercher(session: any){
  

  
//    return this.httpClient.post<{message : string}>(`${this.formationURL + '/api/getEtudiantBy'}`, session);}
}
