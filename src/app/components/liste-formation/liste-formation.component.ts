import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent implements OnInit {

  formation :any; 
  formations :any; 
  id:any;

  constructor(private router :Router ,private formationservice:FormationService ,private activatedRoute : ActivatedRoute  ,private toastr: ToastrService ) { }

  getFormations(){
  this.formationservice.getFormations().subscribe((data)=>{
    console.log(data);

    this.formations = data.formations;
      })
    }
  ngOnInit(): void {


   
    this.getFormations()
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
  


        
  }
   displasyFormation(id:any){
     

    this.router.navigate([`editFormation/${id}`]);
    }

    deleteFormation(id:any){
      var res = confirm("Êtes-vous sûr de vouloir supprimer?");
      if(res){
      this.formationservice.deleteFormation(id).subscribe(()=>{
        console.log("formation deleted");
        this.toastr.success(
          'formation a été supprimer ' ,
          'Succès',
          { timeOut: 5000 }
          );
          this.getFormations();
        })
      }else{
        this.toastr.warning(
          'Annulation de suppression ' ,
          'alerte',
          { timeOut: 5000 }
        );
    
  
      }
    }
      
  
  
  editFormation(id:any){
    console.log("editformation");

    this.router.navigate([`editFormation/${id}`]);
  
  }
  update(event:any){
    this.formations=event;

  }

}
