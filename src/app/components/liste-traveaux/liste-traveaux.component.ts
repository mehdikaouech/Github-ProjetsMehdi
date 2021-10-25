import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-traveaux',
  templateUrl: './liste-traveaux.component.html',
  styleUrls: ['./liste-traveaux.component.css']
})
export class ListeTraveauxComponent implements OnInit {
  id:any;
traveau:any
  traveaux:any={}
  title:any;
  message:any
  listetraveaux: any =[];
  constructor(private formationService :  FormationService ,private userService :  UserService ,  private toastr: ToastrService, private formBuilder : FormBuilder,private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("my id",this.id);
   
    if (this.id) {
      this.formationService.getTraveau(this.id).subscribe((data)=>{
        console.log(data);
        this.traveaux = data.traveau;
        console.log(this.traveaux)
        
      })
   ;
      
      this.title="mes documents";
  
    }else{
      this.id=localStorage.getItem('id')
      this.formationService.getTraveaux().subscribe((data)=>{
        console.log(data);
        this.traveaux = data.traveaux;

        for (let i = 0; i < this.traveaux.length; i++) {
          if (this.traveaux[i].idEnseignant == this.id) {
            this.listetraveaux.push(this.traveaux[i]);
          }        
      }      console.log(this.listetraveaux);
       } )
        this.title="liste-documents";
      }
    
    }
    delete(id:any){
      var res = confirm("Êtes-vous sûr de vouloir supprimer ?");
      if(res){
      
      this.formationService.deleteTraveau(id).subscribe(()=>{
        this.message=['Etudiant a été supprimer avec succés ']
        console.log("etudiant deleted");
      })
    } else{
      this.toastr.warning(
        "Annulation de suppression " ,
        'alerte',
        { timeOut: 5000 }
      );
    
  
  }

    }}
