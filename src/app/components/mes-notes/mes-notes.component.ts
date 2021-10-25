import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mes-notes',
  templateUrl: './mes-notes.component.html',
  styleUrls: ['./mes-notes.component.css']
})
export class MesNotesComponent implements OnInit {
  enseignant:any 
  en:any
  notes:any={};
  users:any={}
  mesNote : any =[];
  id:any
  nom:any
  constructor(private formationservice:FormationService,private userService:UserService ,private activatedRoute : ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {

// this.id=localStorage.getItem('id')

this.id=localStorage.getItem('id')
this.userService.getensignants().subscribe((data)=>{
  console.log(data);

  this.users = data.users;
    })
this.formationservice.getnotes().subscribe((data)=>{
  console.log(data);
  this.notes = data.notes;

  for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].Etudiant == this.id) {
        this.mesNote.push(this.notes[i]);
      }        
  }
  for (let i = 0; i < this.users.length; i++) {
    if (this.users[i]._id == this.notes.IDenseignant) {
      this.enseignant.push(this.users[i]);
    }        
}
console.log("mmmm",this.enseignant);
        })
        this.en=this.enseignant.nom
  }

}
