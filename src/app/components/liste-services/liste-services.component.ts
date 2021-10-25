import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-liste-services',
  templateUrl: './liste-services.component.html',
  styleUrls: ['./liste-services.component.css']
})
export class ListeServicesComponent implements OnInit {
  services:any
  id:any
  role:any
  traitement=['En cours de traitement']
  constructor( private serviceService :ServiceService, private router :Router ,private activatedRoute:ActivatedRoute,private toastr:ToastrService ) { }
  getservice(){
  this.serviceService.getservice().subscribe((data)=>{
    console.log(data)

    this.services = data.services;
      })
    }
  ngOnInit(): void {
this.getservice()
  this.role=localStorage.getItem('role')
this.id=localStorage.getItem('id')


        
    if(this.role='Admin'){

    this.serviceService.getservice().subscribe((data)=>{
      console.log(data);

      this.services = data.services;
      
        })
      }
      else{
  
          this.serviceService.getserviceByid().subscribe((data)=>{
            console.log(data);
      
            this.services = data.services;
              })

        }



        
  }

  deleteService(id:any){
    var res = confirm("Êtes-vous sûr de vouloir Supprimer  ?");
    if(res){
    this.serviceService.deleteService(id).subscribe(()=>{
      console.log("formation deleted");
      this.toastr.success(
        'service a été supprimer ' ,
        'Succès',
        { timeOut: 5000 }
        );
        this.getservice();
      })
    
    }else{
      this.toastr.warning(
        "Annulation d'ajout " ,
        'alerte',
        { timeOut: 5000 }
      );
    
    
    }}


traiterService(id:any){
  this.serviceService.traiterService(id).subscribe(
    () => {
      console.log("mabrouk")
      this.toastr.success(
        'service a été traité ' ,
        'Succès',
        { timeOut: 5000 }
        );
        this.getservice();
      })
    }
  


}

