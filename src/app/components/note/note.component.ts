import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Etudiant } from 'src/app/models/etudiant';
import { formation } from 'src/app/models/formation';
import { session } from 'src/app/models/session';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  noteForm!: FormGroup
  childFromations: any
  childEtudiants: any
  childEnseignants: any
  childSessions!: session
  id: any
  user!: Etudiant
  note: any = {}
  notes: any
  enseignant: any

  name: any
  constructor(private formBuilder: FormBuilder, private router : Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private formationService: FormationService, private userService: UserService) { }
  ngOnInit(): void {


    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = localStorage.getItem('id')
    
    this.noteForm = this.formBuilder.group({

      idEtudiant: [''],
      Etudiant: [''],
      IDenseignant: [''],
      formation: [''],
      resultat: [''],
      mention: [''],



    })


    this.formationService.getFormations().subscribe((data) => {
      console.log(data);

      this.childFromations = data.formations;
    })


    this.userService.getUser(this.id).subscribe((data) => {
      console.log(data);

      this.enseignant = data.user;

      console.log(  this.enseignant);
    })

    this.userService.getetudiants().subscribe((data) => {
      console.log(data);

      this.childEtudiants = data.users;
      console.log('here cho', this.childEtudiants);



    })




  }


  addNote() {


var res = confirm("Êtes-vous sûr de vouloir ajouter  ?");
    if(res){

    this.userService.getUser(this.note.Etudiant).subscribe((data) => {
      console.log('here  etudiant ', data.user);
      this.note.IDenseignant = this.enseignant.nom+this.enseignant.prenom
      this.note.nomEtudiant = data.user.nom
      this.note.prenomEtudiant = data.user.prenom
      this.formationService.createNote(this.note).subscribe((data) => {
  console.log('here note', this.note);
  
        console.log("note  created", data.message);
        this.toastr.success(
          ' note a été Ajouter ' ,
          'Succès',
          { timeOut: 5000 }
        );
      })
    })
    

  }else{
    this.toastr.warning(
      "Annulation d'ajout " ,
      'alerte',
      { timeOut: 5000 }
    );
  }



}

}

