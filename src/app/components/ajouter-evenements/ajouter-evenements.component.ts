import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-ajouter-evenements',
  templateUrl: './ajouter-evenements.component.html',
  styleUrls: ['./ajouter-evenements.component.css']
})
export class AjouterEvenementsComponent implements OnInit {
  eventForm!:FormGroup;
id:any
  event:any= {};

  imagePreview:any;
  titre:any
  constructor(  private router : Router  ,private fb :FormBuilder, private activatedRoute:ActivatedRoute , private toastr: ToastrService,private EventService :EventService,private formationService :FormationService
    ) { }


  ngOnInit(): void {




       this.eventForm = this.fb.group({
         title: [''],
         description: [''],
         address: [''],
         eventDate: [''],
         eventTime: [''],
         image: ['']
   
       })
  

       
  this.id=this.activatedRoute.snapshot.paramMap.get("id")
  console.log("my id",this.id);
  if (this.id) {
    this.EventService.getEventById(this.id).subscribe((data)=>{
      console.log(data);
      this.event = data.event;
    })
    this.titre="Edit";

  }
    else
    {
      this.titre="Ajouter";
    }


}
  
  addEvent() {
    
    if (this.id) {
      var res = confirm("Êtes-vous sûr de vouloir Modifier ?");
      if (res) {
      let editEvent={
    
        id:this.id,
        title:this.event.title,
        description:this.event.description,
        address:this.event.address,
        eventDate:this.event.eventDate,
        eventTime:this.event.eventTime,
        image:this.event.image,
   


      };
      this.EventService.updateEvent(editEvent).subscribe(
        (data)=> {
          console.log( data.message);
          this.toastr.success(
            'événement a été modifier ' ,
            'Succès',
            { timeOut: 5000 }
          );
           this.router.navigate(['/listeEvents']);
        
        });
      
      }else{
        this.toastr.warning(
          'Annulation de modification ' ,
          'alerte',
          { timeOut: 5000 }
        );
    

        }


} else {
  var res = confirm("Êtes-vous sûr de vouloir ajouter ?");
  if (res) {
    console.log('here object',this.event);
    this.EventService.addEvent(this.event, this.eventForm.value.image).subscribe(
      ()=>{
        console.log('event added successfully');
        this.toastr.success(
          'événement a été créer ' ,
          'Succès',
          { timeOut: 5000 }
        );
        this.router.navigate(['/listeEvents']);
        
      } 
    )
  
}else{
  this.toastr.warning(
    "Annulation d'ajout"  ,
    'alerte',
    { timeOut: 5000 }
  );
}
}}
    onImageSelected(event: Event) {
     const file = (event.target as HTMLInputElement).files![0]
     console.log('Here my file', file);
     
     this.eventForm.patchValue({ image: file });
     this.eventForm.updateValueAndValidity();
     const reader = new FileReader();
     reader.onload = () => {
       this.imagePreview = reader.result as string
     }; reader.readAsDataURL(file);
   }
}
