import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  userUrl = 'http://localhost:3000';

  private currentAdminSubject: BehaviorSubject<any>;
  private currentEtudiantSubject: BehaviorSubject<any>;
  private currentEnseignantSubject: BehaviorSubject<any>;
  public currentAdmin: Observable<any>;
  public currentEtudiant: Observable<any>;
  public currentEnseignant: Observable<any>;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentAdminSubject = new BehaviorSubject<any>(localStorage.getItem('connectedAdmin'));
    this.currentEtudiantSubject = new BehaviorSubject<any>(localStorage.getItem('connectedEtudiant'));
    this.currentEnseignantSubject = new BehaviorSubject<any>(localStorage.getItem('connectedEnseignant'));
    this.currentAdmin = this.currentAdminSubject.asObservable();
    this.currentEtudiant = this.currentEtudiantSubject.asObservable();
    this.currentEnseignant = this.currentEnseignantSubject.asObservable();
  }
  public get currentAdminValue(): any {
    return this.currentAdminSubject.value;

  }
  public get currentEtudiantValue(): any {
    return this.currentEtudiantSubject.value;

  }
  public get currentEnseignantValue(): any {
    return this.currentEnseignantSubject.value;

  }

  login(user: any,) {
    console.log('here service hoss', user);
    
    return this.httpClient.post<{ user: any }>(`${this.userUrl}/api/login`, user).subscribe((res) => {
      console.log('res',res);

      if (res.user.role == 'Admin') {
        localStorage.setItem('connectedAdmin', JSON.stringify(res.user.id));
        localStorage.setItem('token', JSON.stringify(res.user.token));
        localStorage.setItem('connectedUserFirstName', JSON.stringify(res.user.nom));
        localStorage.setItem('connectedUserLastName', JSON.stringify(res.user.prenom));
        this.router.navigate(['/Home']);
        
        this.currentAdminSubject.next(user);
      } if (res.user.role == 'Etudiant') {
        localStorage.setItem('connectedEtudiant', (res.user.id));
        localStorage.setItem('connectedUserFirstName',(res.user.nom));
        localStorage.setItem('connectedUserLastName', (res.user.prenom));
        this.router.navigate(['Home']);
        this.currentEtudiantSubject.next(user);
        // location.reload();
      }
      else {
        localStorage.setItem('connectedEnseignant', JSON.stringify(res.user.id));
        localStorage.setItem('connectedUserFirstName', JSON.stringify(res.user.nom));
        localStorage.setItem('connectedUserLastName', JSON.stringify(res.user.prenom));
        this.router.navigate(['/Home']);
        this.currentEnseignantSubject.next(user);
      }

      return user;
    });
  }

  logout() {
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    localStorage.removeItem('role');
    localStorage.removeItem('mytoken');
    localStorage.removeItem('id');

    // this.currentAdminValue.next(null);
  }

}