import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  adminIsAuthenticated: any;
  etudiantIsAuthenticated: any;
  enseignantIsAuthenticated: any;
  id: any
  any: any
  role: any
  nom: any = {}
  prenom: any = {}
 
 
isLoggedIn:any
  isEtudiant: any
  isAdmin: any
  isEnseignant: any
  etudiant = false


  constructor(private activatedRoute: ActivatedRoute, private authService: AuthServiceService, private router: Router, private userService:UserService ) {

  }

relod(){
  setTimeout(()=>{
    window.location.reload();
  }, 1000);    
}

ngOnInit() {
  this.userService.isLoggedIn()
  this.authService.currentAdmin.subscribe((x) => {
      this.adminIsAuthenticated = x;


    });
    this.authService.currentEtudiant.subscribe((x) => {
      this.etudiantIsAuthenticated = x;



    });
    this.authService.currentEnseignant.subscribe((x) => {
      this.enseignantIsAuthenticated = x;



    });


      
    // this.nom = localStorage.getItem('connectedUserfirstName')
    // this.prenom = localStorage.getItem('connectedUserLastName')
    this.nom = localStorage.getItem('nom');
    this.prenom = localStorage.getItem('prenom');
    this.role = localStorage.getItem('role');
    this.isEtudiant=this.userService.isEtudiant()
    this.isLoggedIn = this.userService.isLoggedIn();
     this.isAdmin=this.userService.isAdmin()
     this.isEnseignant=this.userService.isEnseignant()
    this.id= localStorage.getItem('id');

  
  
    // if(this.role='Etudiant'){
    //   this.etudiant=true

    // }
    // this.id=this.activatedRoute.snapshot.paramMap.get('id');
    // console.log("my id",this.id);

    // this.nom = (JSON.parse(localStorage.getItem('connectedUser'))).nom
}
ngAfterViewInit(): void {


  }

  ngOnChanges()	{}

home(){
  this.router.navigate(['home']).then(
    this.relod
          ); 
}
  quitter() {
    
    this.authService.logout();
      this.router.navigate(['']).then(
this.relod
      ); 
  }
  Profil(id: any) {
    this.router.navigate([`profil/${id}`])
  }

  mesNote(id: any) {
    this.router.navigate([`mesNote/${id}`])
  }
  mesDocument(id: any) {
    this.router.navigate([`mesDocument/${id}`])
  }
  mesService(id:any)
  {
    this.router.navigate([`mesService/${id}`])
  }
}