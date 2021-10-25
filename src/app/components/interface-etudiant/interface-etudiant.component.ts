import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-interface-etudiant',
  templateUrl: './interface-etudiant.component.html',
  styleUrls: ['./interface-etudiant.component.css']
})
export class InterfaceEtudiantComponent implements OnInit {
id:any
user:any={}
ids:any
note:any={}
childsession:any={}
  constructor(private activatedRoute : ActivatedRoute , private userService:UserService ,private formationservice:FormationService, private router:Router) { }
  ngOnInit(): void {


  
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("my id",this.id);
    this.userService.getUser(this.id).subscribe((data)=>{
      console.log(data);
      this.user = data.user;
      this.ids=data.user.session

    })

      
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("my id",this.id);
    this.formationservice.getNote(this.id).subscribe((data)=>{
      console.log(data);
      this.note = data.note;
      
    })




    
  }
  // emplois(session:any){
  //   this.router.navigate([`${this.emploisdutemps}`])
  // }
  mesDocument(id:any){
    this.router.navigate([`mesTraveau/${id}`])
  }
  mesNote(id:any){
    this.router.navigate([`mesNote/${id}`])
  }
}
