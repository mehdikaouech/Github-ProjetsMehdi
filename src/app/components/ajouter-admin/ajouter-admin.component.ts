import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {
  adminForm!:FormGroup;
  id : any ;
  title:any;
  Role=['Admin'];
  user:any={};
  imagePreview:any; 
  message:any
  admin:any
  constructor( private formBuilder :FormBuilder, private activatedRoute:ActivatedRoute ,private UserService :UserService, private router:Router,private toastr:ToastrService
    ) {
      let formControls = {
        email: new FormControl ('', Validators.required),
        pwd: new FormControl('', Validators.required),
        nom: new FormControl('', Validators.required),
        prenom: new FormControl('', Validators.required),
        telephone: new FormControl('', Validators.minLength(8)),
        cin: new FormControl('', Validators.minLength(8)),
      
      };
      this.adminForm = this.formBuilder.group(formControls);
    }
    getadmins(){
      this.UserService.getadmins().subscribe((data)=>{
        console.log(data);
  
        this.admin = data.users;
          })
    
    }
    ngOnInit(): void {

this.getadmins()
   
      this.id=this.activatedRoute.snapshot.paramMap.get("id")
      if (this.id) {
        this.UserService.getUser(this.id).subscribe((data)=>{
          console.log(data);
          this.user = data.user;
        })
        this.title="Edit";
    
      }
        else
        {
          this.title="Ajouter";
        }
    
  
      this.adminForm = this.formBuilder.group({
        role: [''],
        nom: ['',[Validators.required]],
        prenom: ['',[Validators.required]],
        cin: ['',[Validators.minLength(8)]],
        pwd: ['',[Validators.required]],
        linkedIn: [''],
        telephone: ['',[Validators.minLength(8),]],
        email: ['',[Validators.minLength(7),Validators.required]],
  
      })
  
    }
  deleteUser(id:any){
    var res = confirm("Êtes-vous sûr de vouloir supprimer ?");
    if(res){
    this.UserService.deleteUser(id).subscribe(()=>{
      console.log("formation deleted");
      this.toastr.success(
        'Admin a été supprimer ' ,
        'Succès',
        { timeOut: 5000 }
        );
        this.getadmins();
      })
         }else{
      this.toastr.warning(
        'Annulation de suppression ' ,
        'alerte',
        { timeOut: 5000 }
      );
  

    }}
    editAdmin(id:any){
      console.log("editUser");
    
      this.router.navigate([`editAdmin/${id}`]);
      location.reload
    }

displayUser(id:any){
  this.router.navigate([`profil/${id}`]);
  }
    addAdmin(){
      
   
      if (this.id) {
        var res = confirm("Êtes-vous sûr de vouloir modifier ?");
        if(res){
               let editUser={
                 role:this.Role, 
                 id:this.id,
                 nom:this.user.nom,
                 prenom:this.user.prenom,
                 telephone:this.user.telephone,
                 email:this.user.email,
                 linkedIn:this.user.linkedIn,
                 pwd:this.user.pwd,
                 cin:this.user.cin,
  
               };
               this.UserService.updateUser(editUser).subscribe(
                 (data)=> {
                   console.log( data.message);
                   this.toastr.success(
                    'Admin a été modifier ' ,
                    'Succès',
                    { timeOut: 5000 }
                  );
                   this.router.navigate(['/Admin']);
                 
                 });
               
                }else{
                  this.toastr.warning(
                    'Annulation de modification ' ,
                    'alerte',
                    { timeOut: 5000 }
                  );
              
            
                }

      } else {
        var res = confirm("Êtes-vous sûr de vouloir ajouter ?");
        if(res){
        this.user.role="Admin";
                   this.UserService.createUser(this.user).subscribe(
         (data)=>{
      
         console.log("admin created",data.message);
         this.toastr.success(
          'Admin a été Ajouter ' ,
          'Succès',
          { timeOut: 5000 }
        );
        this.getadmins();
       })
    }else{
      this.toastr.warning(
        "Annulation d'ajout" ,
        'alerte',
        { timeOut: 5000 }
      );
    }
  }
    }}