import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmploisService } from 'src/app/services/emplois.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-ajouter-emplois',
  templateUrl: './ajouter-emplois.component.html',
  styleUrls: ['./ajouter-emplois.component.css']
})
export class AjouterEmploisComponent implements OnInit {
  emploisDuTempsForm!:FormGroup
  childsessions:any
  imagePreview:any; 
  emplois:any={}
  id:any
  constructor (private formationService :  FormationService ,private formBuilder : FormBuilder ,private  emploisservice : EmploisService ,private router:Router,  private toastr: ToastrService) { }

  ngOnInit(): void {


     
  
  
        
    this.emploisDuTempsForm = this.formBuilder.group({
    
      idSession:[''],
          img:[''],
  
      })


    this.formationService.getSessions().subscribe((data)=>{
      console.log(data);

      this.childsessions  = data.sessions;
        })
      }
        addEmplois(){
          
      
          var res = confirm("Êtes-vous sûr de vouloir ajouter ?");
          if(res){
          if (this.id) {
      
      
            let editEmplois={
              id:this.id,
              idSession:this.emplois.idSession,
          
  
  
            };
            this.formationService.updateSession(editEmplois).subscribe(
              (data)=>{
              console.log(data.message);
            })
    
      } 
       
      
       else {
   
        this.emploisservice.createEmplois(this.emplois,this.emploisDuTempsForm.value.img).subscribe(
          (data)=>{
          console.log("emplois  created",data.message);

          this.toastr.success(
            'Emplois du temps  a été créer ',
            'Succès',
            { timeOut: 5000 }
          );
          this.router.navigate(['/listeEmplois']);
        })
      
      }
    }else{
      this.toastr.warning(
        'Annulation d ajout ' ,
        'alerte',
        { timeOut: 5000 }
      );
  }}
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files![0];
    // Ajout d'un attribut img dans l'objet Chef
    this.emploisDuTempsForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.emploisDuTempsForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu de fichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier avec succès
    reader.onload = () => {
      //affecter le résultat de la lecture dans la variable imagePreview
    this.imagePreview= reader.result as string
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
    }
}
