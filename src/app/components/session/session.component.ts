import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { session } from 'src/app/models/session';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

sessions:any; 
id:any;
isAdmin:any
constructor(private router :Router , private userService:UserService, private formationservice:FormationService ,private activatedRoute : ActivatedRoute , private toastr: ToastrService ) { }
getSessions(){
this.formationservice.getSessions().subscribe((data)=>{
  console.log(data);

  this.sessions = data.sessions;
    })}
ngOnInit(): void {


 this.getSessions()
  this.isAdmin=this.userService.isAdmin
  this.id=this.activatedRoute.snapshot.paramMap.get('id');
 
  this.isAdmin=this.userService.isAdmin()


      
}
 displasySession(id:any){
   

  this.router.navigate([`editSession/${id}`]);
  
  }

  deleteSession(id:any){
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(res){
    this.formationservice.deleteSession(id).subscribe(()=>{
      console.log("session deleted");
      this.toastr.success(
        'Session a été supprimer ' ,
        'Succès',
        { timeOut: 5000 }
        );
        this.getSessions();
      })
 }else{
  this.toastr.warning(
    'Annulation de suppression ' ,
    'alerte',
    { timeOut: 5000 }
  );


}

}

editSession(id:any){
  console.log("editsession");

  this.router.navigate([`editSession/${id}`]);

}

update(event:any){
  this.sessions=event;

}
}