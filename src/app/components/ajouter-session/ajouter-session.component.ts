import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-ajouter-session',
  templateUrl: './ajouter-session.component.html',
  styleUrls: ['./ajouter-session.component.css']
})
export class AjouterSessionComponent implements OnInit {
sessionForm!:FormGroup
session:any={};
title:any;
id:any
childUser:any
childFromation:any
@Output() newusers= new EventEmitter<string>() ;
message:any
  constructor(private formBuilder : FormBuilder, private activatedRoute:ActivatedRoute  , private router : Router,private toastr: ToastrService,private formationService :  FormationService,private userService:UserService) { 
     let formControls = {
    nom: new FormControl ('', Validators.required),
    nbheures: new FormControl('', Validators.required),
    d2d: new FormControl('', Validators.required),
    d2c: new FormControl('', Validators.required),
    
  };
  this.sessionForm = this.formBuilder.group(formControls);
 }

  ngOnInit(): void {

    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    console.log("my id",this.id);

    this.userService.getensignants().subscribe((data)=>{
      console.log(data);

      this.childUser = data.users;
     
        })
          
    this.formationService.getFormations().subscribe((data)=>{
      console.log(data);

      this.childFromation = data.formations;
  
        })

  
        this.sessionForm = this.formBuilder.group({
        
          nom:['',[Validators.required]],
          nbheures:['',[Validators.required]],
          prix:['',[Validators.required]],
           d2d:['',[Validators.required]],
         d2c:['',[Validators.required]],
         formation:[''],
         formateur:[''],
         idFormation:[''],


    })


        if (this.id) {
          this.formationService.getSession(this.id).subscribe((data)=>{
            console.log(data);
            this.session = data.session;
          })
          this.title="Edit";
      
        }
          else
          {
            this.title="Ajouter";
          }
      
    
     
      }
 



  
     addSession(){
     
        if (this.id) {
          var res = confirm("Êtes-vous sûr de vouloir Modifier ?");
          if(res){
          let editSession={
            id:this.id,
            nom:this.session.nom,
            nbheures:this.session.nbheures,
            prix:this.session.prix,
            d2d:this.session.d2d,
            d2c:this.session.d2c,
            formation:this.session.formation,
            formateur:this.session.formateur,
            idFormation:this.session. idFormation,
            idFormateur:this.session.idFormateur,

          };
          this.formationService.updateSession(editSession).subscribe(
            (data)=>{
            console.log(data.message);
            this.toastr.success(
              'session a été modifier ' ,
              'Succès',
              { timeOut: 5000 }
            );
            this.router.navigate(['/Session']);
          })
    
    } else{
      this.toastr.warning(
        "Annulation de modification " ,
        'alerte',
        { timeOut: 5000 }
      );
    
    
    }
  }
    
     else {

      var res = confirm("Êtes-vous sûr de vouloir ajouter ?");
      if(res){

      this.formationService.createSession(this.session).subscribe((data)=>{
        this.message=['La nouvelle Session a été crée avec succés ']
        console.log("session  created" ,data.message);
        this.toastr.success(
          'session a été créer ' ,
          'Succès',
          { timeOut: 5000 }
        );
        this.router.navigate(['/Session']);
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
     
    
    }