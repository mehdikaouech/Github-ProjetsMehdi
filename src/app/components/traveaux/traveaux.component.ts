import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-traveaux',
  templateUrl: './traveaux.component.html',
  styleUrls: ['./traveaux.component.css']
})
export class TraveauxComponent implements OnInit {
  imagePreview:any; 
  traveauxForm!:FormGroup;
  childUser: any
  id:any 
  idE:any 
  traveau:any={}
  message:any
  profil:any
  etudiant:any={}
  nomEnseignat:any
  nom:any
  prenom:any
  constructor(private formBuilder : FormBuilder,private toastr: ToastrService, private router: Router, private activatedRoute:ActivatedRoute ,private userService:UserService,private formationService:FormationService) { }
  ngOnInit(): void {

         this.idE= localStorage.getItem('id');
         
         this.nom= localStorage.getItem('nom');
         
         this.prenom= localStorage.getItem('prenom');
        // this.id=this.activatedRoute.snapshot.paramMap.get("id")
        // console.log("my id",this.id);
        this.traveauxForm = this.formBuilder.group({
        
          idEnseignant:[''],
          img:[''],
          // etudiant:[''],
          idEtudiant:[''],
          description:[''],
          


    })
 
    this.userService.getensignants().subscribe((data)=>{
      console.log(data);

      this.childUser = data.users;
 
        })
        this.userService.getUser(this.id).subscribe((data)=>{
          console.log(data);
    
          this.etudiant = data.user;
         
            })
  }

  addTraveau(){
    var res = confirm("Êtes-vous sûr de vouloir ajouter ?");
    if(res){

    this.traveau.idEtudiant=this. nomEnseignat

   this.traveau.idEtudiant=this.idE  
   this.traveau.nomEtudiant =  this.nom
   this.traveau.prenomEtudiant =  this.prenom

    
      // this.traveau.nomEnseignat =this.nomEnseignat
      this.formationService.createtraveau(this.traveau,this.traveauxForm.value.img).subscribe((data)=>{
        this.message=['Votre ficher a été envoyer ']
        console.log("Documment  created" ,data.message);
       
        this.toastr.success(
          'session a été créer ' ,
          'Succès',
          { timeOut: 5000 }
        );
        this.router.navigate(['/Home']);
      })
  
  
  } else{
    this.toastr.warning(
      "Annulation d'ajout " ,
      'alerte',
      { timeOut: 5000 }
    );
  
  
  }
  }
  


  
  
  
  
  
  
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files![0];
    // Ajout d'un attribut img dans l'objet Chef
    this.traveauxForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.traveauxForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu de fichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier avec succès
    reader.onload = () => {
      //affecter le résultat de la lecture dans la variable imagePreview
    this.imagePreview = reader.result as string
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
    }
}
