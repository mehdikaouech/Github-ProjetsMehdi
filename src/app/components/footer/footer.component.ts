import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  isLoggedIn:any
  isEtudiant: any
  isAdmin: any
  isEnseignant: any
  etudiant = false

  constructor(private activatedRoute: ActivatedRoute,  private router: Router, private userService:UserService ) {}
  ngOnInit(): void {
  
    this.isEtudiant=this.userService.isEtudiant()
    this.isLoggedIn = this.userService.isLoggedIn();
     this.isAdmin=this.userService.isAdmin()
     this.isEnseignant=this.userService.isEnseignant()
  
  }
}
