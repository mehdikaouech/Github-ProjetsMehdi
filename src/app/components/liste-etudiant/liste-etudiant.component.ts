import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { session } from 'src/app/models/session';
import { FormationService } from 'src/app/services/formation.service';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {
  users :any; 
  user:any= {}
  note:any
  id : any ;
chercher:any
  message:any
 chercherForm!:FormGroup;
  sessions:any
  isAdmin:any
  isEnseignant:any
  constructor(     
    private formBuilder: FormBuilder,private router :Router ,private userService:UserService ,private activatedRoute : ActivatedRoute  ,private formationservice : FormationService, private toastr: ToastrService) {    
       let formControls = {
      session: new FormControl(''),
 
    };
    this.chercherForm = this.formBuilder.group(formControls);

   }


  absence:number=0;
  getetudiants (){
    this.userService.getetudiants().subscribe((data)=>{
      console.log(data);

      this.users = data.users;
        })
      }
  ngOnInit(): void {
    this.isAdmin=this.userService.isAdmin
    this.getetudiants();
    this.isEnseignant=this.userService.isEnseignant()
    this.chercherForm = this.formBuilder.group({
      session: ['']
  

    })
  
        this.id=this.activatedRoute.snapshot.paramMap.get('id');
        this.formationservice.getnotes().subscribe((data)=>{
          console.log(data);
    
          this.note = data.notes;
            })

        

  }
  get session() {
    return this.chercherForm.get('session');
  }
  Absence(_id:any){
   
this.users.absence=this.users.absence+1
console.log(this.users.absence,this.absence);

  }
  noteUser(id:any){
    this.router.navigate([`addNote/${id}`]);
    }
  displayUser(id:any){
    this.router.navigate([`profil/${id}`]);
    }
    

    deleteUser(id:any){
      var res = confirm("Êtes-vous sûr de vouloir supprimer?");
      if(res){
      this.userService.deleteUser(id).subscribe(()=>{
        this.message=['Etudiant a été supprimer avec succés ']
        console.log("etudiant deleted");
        this.toastr.success(
          'Etudiant a été supprimer ' ,
          'Succès',
          { timeOut: 5000 }
        );
        this.getetudiants();
      })
      
    }else{
      this.toastr.warning(
        'Annulation de suppression ' ,
        'alerte',
        { timeOut: 5000 }
      );
  

    }
}
  editEtudiant(id:any){
    console.log("editUser");
  
    this.router.navigate([`editEtudiant/${id}`]);
  
  }

  chercherSessions(session:any){
    this.userService.chercher(session).subscribe(()=>{

      console.log("etudiant par session");
    })
}
  }

