import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  login: boolean | undefined;

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if (event.url === '/') {
          this.login= true;
        } else {
          this.login= false;
        }
        console.log(this.login);
      }
    });
  }
  constructor (private router: Router) {
   
  }
  title = 'academie';
}
