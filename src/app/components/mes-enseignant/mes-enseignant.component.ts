import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mes-enseignant',
  templateUrl: './mes-enseignant.component.html',
  styleUrls: ['./mes-enseignant.component.css']
})
export class MesEnseignantComponent implements OnInit {

  constructor(private userservice:UserService) { }
  enseignants:any
  ngOnInit(): void {
    this.userservice.getensignants().subscribe(
      (data)=> {
        this.enseignants = data.users;
        console.log('enseignants',this.enseignants);
        
      }
    )
  }

}