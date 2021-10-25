import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-mes-service',
  templateUrl: './mes-service.component.html',
  styleUrls: ['./mes-service.component.css']
})
export class MesServiceComponent implements OnInit {
id:any
services:any
traitement=['En cours de traitement']
  constructor(private serviceService:ServiceService, private activatedRoute :ActivatedRoute ) { }
  service:any;
  messervice : any =[];
  
  ngOnInit(): void {
       
 
    this.id=localStorage.getItem('id')

    this.serviceService. getservice().subscribe((data)=>{
      console.log(data);
      this.service = data.services;

      for (let i = 0; i < this.service.length; i++) {
          if (this.service[i].idetudiant == this.id) {
            this.messervice.push(this.service[i]);
          }        
      }
     
  })
  
  }

}