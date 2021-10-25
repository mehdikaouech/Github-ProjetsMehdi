import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  login: any = {};
  id: any
  message: any
  user: any = {}
  token: any = {}
  constructor(private userservice: UserService,

    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService,
    private authService: AuthServiceService,

    private formBuilder: FormBuilder) {
    let formControls = {
      email: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required)
    };
    this.loginForm = this.formBuilder.group(formControls);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get pwd() {
    return this.loginForm.get('pwd');
  }
  relod(){
    location.reload
  }
  
  ngOnInit(): void {

      this.loginForm = this.formBuilder.group({
      email: ['', [Validators.minLength(4), Validators.required]],
      pwd: ['', [Validators.minLength(4), Validators.required]],

    })


    //   }
    //   // Login() {
    //   //   let data = this.loginForm.value;
    //   //   console.log('dataa : ' + data);
    //   //   this.userservice.login(this.user).subscribe(
    //   //     data => {
    //   //       console.log('RESULTAT : ' + data);
    //   //       let result: any = data;
    //   //       if (result.ROLE != null) {
    //   //         let token = this.randStr(32);
    //   //         console.log('TOKEN GENERATED : ' + token);
    //   //         localStorage.setItem('userID', result.ID);
    //   //         localStorage.setItem('roleUser', result.ROLE);
    //   //         localStorage.setItem('userNP', result.NOM + ' ' + result.PRENOM);
    //   //         localStorage.setItem('myToken', token);
    //   //         this.router.navigate(['/home']);
    //   //         console.log('succes');


    //   //       } else {
    //   //         console.log('error');

    //   //       }
    //   //     },

    //   //   );
    //   // }


    //   Login(){
    //     console.log('here in login', this.login);
    //     let token = this.randStr(32);
    //     this.userservice.login(this.login).subscribe(

    //       (data) => {
    //         let result: any ={data} ;
    //         if (result.role != null) {
    //           let token = this.randStr(32);
    //           console.log('TOKEN GENERATED : ' + token);
    //           localStorage.setItem('userID', result.id);
    //           localStorage.setItem('roleUser', result.role);
    //           localStorage.setItem('userNP', result.nom + ' ' + result.prenom);
    //           localStorage.setItem('myToken', token);
    //           this.router.navigate(['/home']);
    //           console.log('succes');
    //         }
    //         if (data.user.role == 'Enseignant') {
    //           this.id=data.user.id

    //           this.router.navigate(['/addNote']);
    //         } else if (data.user.role == 'Etudiant') {
    //           localStorage.setItem('connectedUser', JSON.stringify(data.user));
    //           console.log('TOKEN GENERATED : ' + token);

    //           this.id=data.user.id

    //           this.router.navigate([`interfaceEtudiant/${this.id}`]);
    //         } else if (data.user.role == 'Admin') {
    //           this.router.navigate(['/']);
    //         } else {
    //           this.router.navigate(['/home']);
    //         }

    //       }
    //     )


    // }
    // randStr(len:any) {
    //   let s = '';
    //   while (len--)
    //     s += String.fromCodePoint(Math.floor(Math.random() * (126 - 33) + 33));
    //   return s;
    // }

    // isAdmin(){
    //   if(!this.user.role )
    //   return false;
    //   return(this.user.role.indexOf('Admin')>-1)

    // }
  }
  // Login(){
  //   console.log('here in login', this.login);
  //   this.userservice.login(this.login).subscribe(
  //     (data) => {
  //       if (data.user.role == 'Enseignant') {

  //         this.id=data.user.id
  //         localStorage.setItem('connectedUser', JSON.stringify(data.user));
  //         this.router.navigate(['/addNote']);
  //       } else if (data.user.role == 'Etudiant') {
  //         localStorage.setItem('connectedUser', JSON.stringify(data.user));
  //         this.id=data.user.id
  //         let token = data.user.token
  //         localStorage.setItem("mytoken",token)
  //         this.router.navigate([`interfaceEtudiant/${this.id}`]);
  //       } else if (data.user.role == 'Admin') {
  //         this.router.navigate(['/']);
  //       } else {
  //         this.router.navigate(['/home']);
  //       }

  //     }
  //   )
  //     }

  // loginHoussem() {
  //   alert('here')
  //   this.authService.login(this.loginForm.value);

  // }


  
  Login() {
    console.log(this.loginForm.value);
    //envoi des données vers APIs ( backend )
    this.login = this.loginForm.value
    this.userservice.login(this.login).subscribe(
      (data) => {
        console.log(data);
        if (data != null) {
          let token = data.token

          localStorage.setItem("mytoken", token)
        
          localStorage.setItem("nom", data.user.nom)
          localStorage.setItem("role", data.user.role)

          localStorage.setItem("prenom", data.user.prenom)
          localStorage.setItem("id", data.user.id)
          let id = data.user.id
          // this.router.navigate([`interfaceEtudiant/${id}`]);
          this.router.navigate(['Home']).then(
           
          );
          this.userservice.isLoggedIn();
          this.toastr.success(
            'Bienvenue ' + data.user.nom + ' ' + data.user.prenom,
            'Succès',
            { timeOut: 5000 }
          );

        }
        //l'execution mte3ha tsiir automatiquement en cas de succés

        else {
          this.toastr.error(
            'SVP verifier votre E-mail et mot de passe',
            'Error',
            { timeOut: 5000 }
          );
        }
      },
      error => {
        this.toastr.error('Vérifier vote Email ou votre mot de passe', 'Error', { timeOut: 5000 });
        console.log('Erreur :Vérifier vote Email ou votre mot de passe ' + error);
      }
    );
  }
}