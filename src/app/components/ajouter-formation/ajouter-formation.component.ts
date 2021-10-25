import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
  formationForm!:FormGroup;
  formation:any={};
  id:any;
  title:any;
  message:any;
  constructor( private formBuilder : FormBuilder,private router : Router, private activatedRoute:ActivatedRoute ,private formationservice :  FormationService,private toastr: ToastrService )  {
    let formControls = {
     
      nom: new FormControl('', Validators.required),

    };
    this.formationForm = this.formBuilder.group(formControls);
  }

  ngOnInit(): void {
   

    this.formationForm = this.formBuilder.group({
      nom: ['',[Validators.required]],
      
      description:[''],
})

    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    console.log("my id",this.id);
    if (this.id) {
      this.formationservice.getFormation(this.id).subscribe((data)=>{
        console.log(data);
        this.formation = data.formation;
      })
      this.title="Edit";
  
    }
      else
      {
        this.title="Ajouter";
      }
  

 
  }
addFormation(){
    
  var res = confirm("Êtes-vous sûr de vouloir ajouter  ?");
  if(res){
    if (this.id) {


      let editFormation={
        id:this.id,
        nom:this.formation.nom,
       
        description:this.formation.description
      };
      this.formationservice.updateFormation(editFormation).subscribe(
        (data)=>{
        console.log(data.message);
      })

} 
 

 else {
     
  this.formationservice.createFormation(this.formation).subscribe((data)=>{
    this.message=['La nouvelle Formation a été crée avec succés ']
    console.log("formation  created" ,data.message);

    this.toastr.success(
      'Formation a été Ajouter ' ,
      'Succès',
      { timeOut: 5000 }
    );
     this.router.navigate(['/listeFormation']);
   })
  


}
}else{
  this.toastr.warning(
    "Annulation d'ajout " ,
    'alerte',
    { timeOut: 5000 }
  );


}

  
}
 

}