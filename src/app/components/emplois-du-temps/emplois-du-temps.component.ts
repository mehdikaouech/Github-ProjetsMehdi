import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmploisService } from 'src/app/services/emplois.service';
import { FormationService } from 'src/app/services/formation.service';


@Component({
  selector: 'app-emplois-du-temps',
  templateUrl: './emplois-du-temps.component.html',
  styleUrls: ['./emplois-du-temps.component.css']
})
export class EmploisDuTempsComponent implements OnInit {
  emplois: any;
  
session: any;


  constructor(private formationService :  FormationService ,private formBuilder : FormBuilder ,private  emploisservice : EmploisService) { }

  ngOnInit(): void {

   
  
  



    this.emploisservice.getemplois().subscribe((data)=>{
      console.log(data);

      this.emplois = data.emplois;
        })



      }}
