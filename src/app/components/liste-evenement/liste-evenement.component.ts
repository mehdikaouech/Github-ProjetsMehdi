import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  styleUrls: ['./liste-evenement.component.css']
})
export class ListeEvenementComponent implements OnInit {
  isAdmin:any
  events:any;
  constructor(private eventService:EventService,private userService:UserService, private router:Router, private toastr: ToastrService) { }
  

  
  getEvents(){
    this.eventService.getAllevents().subscribe(
      (data) => {
        this.events = data.events;
      }
    )
  }
  ngOnInit() {
    this.isAdmin=this.userService.isAdmin
    this.getEvents();
  }
  goToAddEvent(){
    this.router.navigate(['addEvent']);
  }
  displayEvent(id:any){
    this.router.navigate([`displayEvent/${id}`])
  }
  editEvent(id:any){
    this.router.navigate([`editEvent/${id}`])

  }
  deleteEvent(x:any){
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
    this.eventService.deleteEvent(x).subscribe(
      (data)=> {
        console.log('Event deleted with success', data.message);
        this.toastr.success(
          'événement a été supprimer ' ,
          'Succès',
          { timeOut: 5000 }
          );
        this.getEvents();
      }
    )
  }else{
    this.toastr.warning(
      'Annulation de suppression ' ,
      'alerte',
      { timeOut: 5000 }
    );


  }
}

}
