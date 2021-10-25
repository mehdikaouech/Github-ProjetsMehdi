import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmploisService } from 'src/app/services/emplois.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-liste-emplois',
  templateUrl: './liste-emplois.component.html',
  styleUrls: ['./liste-emplois.component.css']
})
export class ListeEmploisComponent implements OnInit {
  emplois:any=[];
  isAdmin:any
  constructor(private emploisService:EmploisService, private router:Router,private userService:UserService, private toastr: ToastrService) { }
  getemplois(){
    this.emploisService.getemplois().subscribe(
      (data) => {
        this.emplois = data.emplois;
      }
    )
  }
  ngOnInit(): void {
    this.isAdmin=this.userService.isAdmin()
   this. getemplois()
  }
  deleteEmplois(x:any){
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
    this.emploisService.deleteEmplois(x).subscribe(
      (data)=> {
        console.log('Emplois deleted with success', data.message);
        this.toastr.success(
          'Emplois a été supprimer ' ,
          'Succès',
          { timeOut: 5000 }
          );
        this.getemplois();
      }
    )
  }
}
}
