import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-mes-documment',
  templateUrl: './mes-documment.component.html',
  styleUrls: ['./mes-documment.component.css']
})
export class MesDocummentComponent implements OnInit {
  traveaux:any;
  mesTraveaux : any =[];
  id:any
  constructor(private formationService :  FormationService ,private toastr: ToastrService,private formBuilder : FormBuilder,private activatedRoute:ActivatedRoute) { }
  getdocuments(){
     
    this.id=localStorage.getItem('id')

    this.formationService.getTraveaux().subscribe((data)=>{
      console.log(data);
      this.traveaux = data.traveaux;

      for (let i = 0; i < this.traveaux.length; i++) {
          if (this.traveaux[i].idEtudiant == this.id) {
            this.mesTraveaux.push(this.traveaux[i]);
          }        
      }
     
  })
  }
  ngOnInit(): void {
this.getdocuments()
  

}
deletedocument(x:any){
  var res = confirm("Êtes-vous sûr de vouloir supprimer?");
  if(res){
  this.formationService.deleteTraveau(x).subscribe(
    (data)=> {
      console.log('Document a été supprimer with success', data.message);
      this.toastr.success(
        'Document a été supprimer ' ,
        'Succès',
        { timeOut: 5000 }
        );
      this.getdocuments();
    }
  )
}
}
}