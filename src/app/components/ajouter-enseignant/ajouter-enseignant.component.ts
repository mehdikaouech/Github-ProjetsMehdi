
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})
export class AjouterEnseignantComponent implements OnInit {
  Role = ['Enseignant'];
  enseignantForm!: FormGroup;
  user: any = {};
  imagePreview: any;
  id: any;
  message: any
  title: any
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private UserService: UserService, private toastr: ToastrService, private router: Router,
  ) {
    let formControls = {
      email: new FormControl ('', Validators.required),
      pwd: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.minLength(8)),
    };
    this.enseignantForm = this.formBuilder.group(formControls);
  }
  get email() {
    return this.enseignantForm.get('email');
  }

  ngOnInit(): void {



    this.enseignantForm = this.formBuilder.group({
      role: [''],
      nom: ['',[Validators.required]],
      prenom: ['',[Validators.required]],
      cin: ['',[Validators.minLength(8)]],
      pwd: ['',[Validators.required]],
      linkedin: [''],
      telephone: ['',[Validators.minLength(8),]],
      email: ['',[Validators.minLength(7),Validators.required]],

    })



    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log("my id", this.id);
    if (this.id) {
      this.UserService.getUser(this.id).subscribe((data) => {
        console.log(data);
        this.user = data.user;


      })
      this.title = "Edit";

    }
    else {
      this.title = "Ajouter";
    }


  }

  addEnseigant(c:any) {
   
   
        if (this.id) {
          var res = confirm("Êtes-vous sûr de vouloir Modifier ?");
      if (res) {
        let editUser = {

          id: this.id,
          nom: this.user.nom,
          prenom: this.user.prenom,
          linkedin: this.user.linkedin,
          cin: this.user.cin,
          pwd: this.user.pwd,
          telephone: this.user.telephone,
          email: this.user.email,



        };
        this.UserService.updateUser(editUser).subscribe(
          (data) => {
            console.log(data.message);
    this.toastr.success(
        'Enseignant a été modifier ' ,
        'Succès',
        { timeOut: 5000 }
      );
       this.router.navigate(['/listeEnseignant']);
     
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
        if (res) {
          
        this.user.role = "Enseignant";
        this.UserService.createUser(this.user).subscribe(
          (data) => {
          
            console.log("enseignant created", data.message);
            console.log(data)
            this.toastr.success(
              'Enseignant a été créer ',
              'Succès',
              { timeOut: 5000 }
            );
            this.router.navigate(['/listeEnseignant']);
          }
         
          );

        
      }else{
        this.toastr.warning(
          "Annulation d'ajout " ,
          'alerte',
          { timeOut: 5000 }
        );
    
  
      }
      
    }}


  








  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files![0];
    // Ajout d'un attribut img dans l'objet Chef
    this.enseignantForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.enseignantForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu de fichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier avec succès
    reader.onload = () => {
      //affecter le résultat de la lecture dans la variable imagePreview
      this.imagePreview = reader.result as string
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
  }
}