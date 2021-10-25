import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-enseignant',
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.css']
})
export class ListeEnseignantComponent implements OnInit {
  users :any; 
  user:any= {}
  id : any ;
  message:any
  isAdmin:any
  @Input() childensiegnanat :any;
  constructor(private router :Router ,private userService:UserService ,private activatedRoute : ActivatedRoute, private toastr: ToastrService ) { }
  getensignants (){
    this.userService.getensignants().subscribe((data)=>{
      console.log(data);

      this.users = data.users;
        })
  }
  ngOnInit(): void {
    this.getensignants()
this.isAdmin=this.userService.isAdmin
  }
  displayUser(id:any){
    this.router.navigate([`profil/${id}`]);
    }

    editUser(id:any){
      console.log("editUser");
    
      this.router.navigate([`editUser/${id}`]);
    
    }
    deleteUser(id:any){
      var res = confirm("Êtes-vous sûr de vouloir supprimer?");
      if(res){
      this.userService.deleteUser(id).subscribe(()=>{


        
        console.log("formateur deleted");
        this.toastr.success(
          'Enseignant a été supprimer ' ,
          'Succès',
          { timeOut: 5000 }
          );
          this.getensignants();
        })
        
    }else{
      this.toastr.warning(
        'Annulation de suppression ' ,
        'alerte',
        { timeOut: 5000 }
      );
  

    }
  }
}
