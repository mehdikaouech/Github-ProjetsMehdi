import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  constructor() { }
  @Input() enseignant:any;
    ngOnInit(): void {
  }

}
