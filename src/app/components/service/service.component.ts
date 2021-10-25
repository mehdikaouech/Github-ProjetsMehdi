import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';
import { ServiceService } from 'src/app/services/service.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serviceForm!:FormGroup

  session:any
  service :any= {}
  childEtudiants:any
  id:any
  childSession:any
  services:any={}
  traitement=['En cours de traitement'];
  Categorie:any
  childusers:any
  user:any
  nom:any
  prenom:any
  constructor( private activatedRoute :ActivatedRoute ,  private router:Router , private toastr: ToastrService,private formBuilder :FormBuilder,private formationService:FormationService,private serviceService:ServiceService,private userService:UserService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.nom=localStorage.getItem('nom');
    this.id= localStorage.getItem('id');
    this.prenom=localStorage.getItem('prenom');








    this.serviceForm = this.formBuilder.group({
      categorie:[''],
      type: [''],
      session: [''],
      etudiant: [''],
      idetudiant: [''],
      message: [''],
     traitement: [''],


    })
    
    this.userService.getUser(this.id).subscribe((data)=>{
      console.log(data);

      this.childusers  = data.user;
        }) 

    this.formationService.getSessions().subscribe((data)=>{
      console.log(data);

      this.childSession  = data.sessions;
        })


        this.userService.getetudiants().subscribe((data)=>{
          console.log(data);
    
          this.childEtudiants  = data.users;
            })


            this.serviceService.getserviceByid().subscribe((data)=>{
              console.log(data);
        if (data.services.idetudiant=this.id){
              this.services = data.services;
             } })

  }




  addService(){
    var res = confirm("Êtes-vous sûr de vouloir ajouter  ?");
  if(res){



     this.service.idetudiant=this.id
this.service.etudiant=(this.nom) + (this.prenom)
     this.service.idetudiant=this.id
       this.serviceService.createService(this.service).subscribe(
       (data)=>{
       console.log("service created",data.message);
       console.log(data)
       
       this.toastr.success(
        'service a été envoyer ' ,
        'Succès',
        { timeOut: 5000 }
      );
      this.router.navigate(['/Home']);
    })


} else{
  this.toastr.warning(
    "Annulation d'ajout " ,
    'alerte',
    { timeOut: 5000 }
  );


}
}}
