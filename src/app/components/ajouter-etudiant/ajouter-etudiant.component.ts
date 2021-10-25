import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  etudiantForm!:FormGroup;
  id : any ;
  title:any;
  Role=['Etudiant'];
  absence:any;
  session:any
  formations:any;
  user:any={};
  imagePreview:any;
  message:any 
  constructor(  private router : Router  ,private formBuilder :FormBuilder, private activatedRoute:ActivatedRoute ,private UserService :UserService,private formationService :FormationService, private toastr: ToastrService,
    ) 
    {
      let formControls = {
        email: new FormControl ('', Validators.required),
        pwd: new FormControl('', Validators.required),
        nom: new FormControl('', Validators.required ),
        prenom: new FormControl('', Validators.required),
        session: new FormControl('', Validators.required),
        cin: new FormControl('', Validators.minLength(8)),
      };
      this.etudiantForm = this.formBuilder.group(formControls);
    }
    get email() {
      return this.etudiantForm.get('email');
    }
 

  ngOnInit(): void {

    
    this.absence='0'
    this.formationService.getSessions().subscribe((data)=>{
      console.log(data);

      this.session  = data.sessions;
        })
        this.formationService.getFormations().subscribe((data)=>{
          console.log(data);
    
          this.formations  = data.formations;
            })

    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.UserService.getUser(this.id).subscribe((data)=>{
        console.log(data);
        this.user = data.user;
      })
      this.title="Edit";
  
    }
      else
      {
        this.title="Ajouter";
      }
  
 


    this.etudiantForm = this.formBuilder.group({
      role:[''],
      nom: ['',[Validators.required]],
      prenom: ['',[Validators.required]],
      cin: ['',[Validators.minLength(8),Validators.required]],
      pwd: ['',[Validators.required]],
      linkedin: [''],
      telephone: ['',[Validators.minLength(8),]],
      email: ['',[Validators.minLength(7),Validators.required]],
      session: ['',[Validators.required]],
      formation: [''],
     
  })
}

addEtudiant(){
   
   
    
    if (this.id) {
      var res = confirm("Êtes-vous sûr de vouloir modifier  ?");
      if(res){
             let editUser={
               role:this.Role, 
               id:this.id,
               nom:this.user.nom,
               prenom:this.user.prenom,
               cin:this.user.cin,
               pwd:this.user.pwd,
               session:this.user.session,
               telephone:this.user.telephone,
               email:this.user.email,
               formation:this.user.formation,
               absence:this.user.absence


             };
             this.UserService.updateUser(editUser).subscribe(
               (data)=> {
                 console.log( data.message);
                 this.toastr.success(
                  'Etudiant a été modifier ' ,
                  'Succès',
                  { timeOut: 5000 }
                );
                 this.router.navigate(['/listeEtudiants']);
               
               });
              }else{
                this.toastr.warning(
                  "Annulation d'modifcation " ,
                  'alerte',
                  { timeOut: 5000 }
                );
            
                }
    } else {
  
      var res = confirm("Êtes-vous sûr de vouloir ajouter  ?");
      if(res){
      this.user.role="Etudiant";
       this.UserService.createUser(this.user).subscribe(
       (data)=>{
        this.message=['Etudiant a été Ajouter avec succés ']
       console.log("etudiant created",data.message);
       console.log(data)
       this.toastr.success(
        'Etudiant a été Ajouter ' ,
        'Succès',
        { timeOut: 5000 }
      );
       this.router.navigate(['/listeEtudiants']);
     })


    }else{
      this.toastr.warning(
        "Annulation d'ajout " ,
        'alerte',
        { timeOut: 5000 }
      );
  

    }
  }
  
}}
