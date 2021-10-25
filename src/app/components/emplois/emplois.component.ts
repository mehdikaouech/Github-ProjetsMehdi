import { Component, Input, OnInit } from '@angular/core';
import { EmploisService } from 'src/app/services/emplois.service';

@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.css']
})
export class EmploisComponent implements OnInit {
  @Input() emplois:any={};
  @Input() session:any={};
  emploi:any
  constructor(private emploisService:EmploisService ) { }

  ngOnInit(): void {
    this.emploisService.getemplois().subscribe(
      (data) => {
        this.emploi = data.emplois;
      }
    )
  }

}
