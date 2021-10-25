import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  users:any ;
  user :any = {};
  id : any ;
   note :any = {};
 
      resultat:any = {}
@Input() childUser :any;
@Output() newusers= new EventEmitter<string>() ;

  constructor(private activatedRoute : ActivatedRoute , private userService:UserService ,private formationservice:FormationService) { }

  ngOnInit(): void {

 this.id=localStorage.getItem('id')
  
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      // console.log("my id",this.id);
      this.userService.getUser(this.id).subscribe((data)=>{
        console.log(data);
        this.user = data.user;
   
      })

        
    
      this.formationservice.getNote(this.id).subscribe((data)=>{
        console.log(data);
        this.note = data.note;
        this.resultat= this.note.resultat
        
      })

      


      
    }
isEnseignant(){
    
  if (this.user.role=='Enseignant') {
    return true ;
  } else {
    return false;
  }
}
    isEtudiant(){ 
     
      if (this.user.role=='Etudiant') {
        return true ;
      } else {
        return false;
      }
    }
  }