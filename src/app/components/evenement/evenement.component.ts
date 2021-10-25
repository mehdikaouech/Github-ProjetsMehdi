import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  events: any;
  constructor(private eventService:EventService) { }




  ngOnInit() {
 
    this.eventService.getAllevents().subscribe(
      (data)=> {
        this.events = data.events;
        console.log('events',this.events);
 
        
      }
    )
  }

}
