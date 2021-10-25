import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-note',
  templateUrl: './liste-note.component.html',
  styleUrls: ['./liste-note.component.css']
})
export class ListeNoteComponent implements OnInit {
  notes: any = [];
  note: any;
  id: any;
  title: any;
  user: any = {};
  etudiant: any
  noms: any = [];

  constructor(private formationservice: FormationService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService , private toastr: ToastrService) { }
   
  getNote(){
  this.formationservice.getnotes().subscribe((data) => {

    this.notes = data.notes;
    console.log("notes", this.notes);

  })}
  ngOnInit(): void {


    this.formationservice.getnotes().subscribe((data) => {

      this.notes = data.notes;
      console.log("notes", this.notes);
     

    })


    this.title = "liste des notes";




  }
  deleteNote(id: any) {
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
    this.formationservice.deleteNote(id).subscribe(() => {
      console.log("note deleted");
    
    this.toastr.success(
      'Note a été supprimer ' ,
      'Succès',
      { timeOut: 5000 }
    );
    this.getNote();
  })
    
    
  }else{
    this.toastr.warning(
      'Annulation de suppression ' ,
      'alerte',
      { timeOut: 5000 }
    );


  }
}

}

  // getNoms(){

  //     for (let i = 0; i < this.notes.length; i++) {
  //                   let etudiant = this.getNomEtudiant(this.notes[i].Etudiant);
  //           console.log(etudiant);

  //         this.noms.push(etudiant) ;
  //         console.log("noms",this.noms);

  //     }
  // }
  // getNomEtudiant(id: any) {
  //   this.userService.getUser(id).subscribe(
  //     (data) => {
  //       console.log("etudiant", data.user);

  //       this.etudiant = data.user;
  //       return data.user;

  //     })


  // }


